import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import random
from collections import deque
import time

"""Rocket monitor demo GUI

This module provides a simple Tkinter app that plots three simulated
telemetry streams (pipe pressure, combustion chamber pressure, thrust).
It's intentionally lightweight and easy to replace the simulator with a
real data source later.
"""

class RocketMonitorApp:
    """Simple demo GUI for live plotting of three streams:
    - pipe pressure (controlled by ball valve)
    - combustion chamber pressure (controlled by purge valve)
    - thrust (load cell)

    This is a demo harness — replace `simulate_sensor_reading` with
    a real data reader (serial, bluetooth, etc.) when available.
    """

    def __init__(self, root):
        self.root = root
        self.root.title("Rocket Monitor System")
        
        # Data storage (simulate last 1000 samples at 100ms = 100 seconds of data)
        self.max_points = 1000
    # Use deques as fixed-size circular buffers (fast appends/pops)
        self.times = deque(maxlen=self.max_points)
        self.pipe_pressure_data = deque(maxlen=self.max_points)
        self.chamber_pressure_data = deque(maxlen=self.max_points)
        self.thrust_data = deque(maxlen=self.max_points)
        self.start_time = None
        
        # For smooth data simulation (start from realistic baseline values)
        self.last_pipe_pressure = 125.0
        self.last_combustion_pressure = 240.0
        self.last_thrust = 0
        self.target_pipe_pressure = 150  # Target PSI for pipe
        self.target_combustion_pressure = 250  # Target PSI for combustion chamber
        
        # Pressure build rates (PSI per update)
        self.pipe_pressure_rate = 0.05  # Slower pressure build
        self.combustion_pressure_rate = 0.05  # Slower pressure build
        
        # For min/max tracking
        self.pipe_pressure_min = float('inf')
        self.pipe_pressure_max = float('-inf')
        self.chamber_pressure_min = float('inf')
        self.chamber_pressure_max = float('-inf')
        self.thrust_min = float('inf')
        self.thrust_max = float('-inf')
        
        # Thrust curve parameters
        self.thrust_phase = 'build'  # build, peak, decay, sustain, shutdown
        self.thrust_peak = 12  # Peak thrust in Newtons
        self.thrust_sustain = 4.5  # Sustain thrust in Newtons
        
        # Start with empty buffers; first update will append baseline values
        # (keeps x-axis elapsed-time logic simple)
        
        # Create main container
        main_frame = ttk.Frame(root)
        main_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
        
        # Create graph frame
        graph_frame = ttk.Frame(main_frame)
        graph_frame.pack(fill=tk.BOTH, expand=True)
        
        # Create control frame
        control_frame = ttk.Frame(main_frame)
        control_frame.pack(fill=tk.X, pady=(10, 0))
        
        # --- Valve controls (toggle buttons) ---
        # Ball Valve Toggle (affects pipe pressure)
        self.ball_valve_state = False
        self.ball_valve_btn = ttk.Button(
            control_frame,
            text="Ball Valve: CLOSED",
            command=self.toggle_ball_valve,
            width=20
        )
        self.ball_valve_btn.pack(side=tk.LEFT, padx=10, expand=True)
        
        # Emergency Purge Valve Toggle
        # Purge valve causes rapid pressure drop in all systems
        self.purge_valve_state = False
        self.purge_valve_btn = ttk.Button(
            control_frame,
            text="EMERGENCY PURGE: OFF",
            command=self.toggle_purge_valve,
            width=30  # Increased width to prevent text cutoff
        )
        self.purge_valve_btn.pack(side=tk.LEFT, padx=10, expand=True)
        
        # Create frames for graphs
        top_graph_frame = ttk.Frame(graph_frame)
        top_graph_frame.pack(fill=tk.BOTH, expand=True)
        
        left_graph_frame = ttk.Frame(top_graph_frame)
        left_graph_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        right_graph_frame = ttk.Frame(top_graph_frame)
        right_graph_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        bottom_graph_frame = ttk.Frame(graph_frame)
        bottom_graph_frame.pack(fill=tk.BOTH, expand=True, pady=(10, 0))
        
        # Create pipe pressure graph
        self.pipe_fig = Figure(figsize=(5, 3), dpi=100)
        self.pipe_ax = self.pipe_fig.add_subplot(111)
        self.pipe_ax.set_title('Pipe Pressure')
        self.pipe_ax.set_ylabel('Pressure (PSI)')
        self.pipe_ax.set_xlabel('Time (s)')
        self.pipe_line, = self.pipe_ax.plot([], [], 'b-', label='Pipe Pressure', linewidth=1.5)
        self.pipe_ax.grid(True, which='both', linestyle='--', alpha=0.6)
        
        # Add min/max text for pipe pressure
        self.pipe_stats = self.pipe_ax.text(0.02, 0.98, '', transform=self.pipe_ax.transAxes,
                                          verticalalignment='top', fontsize=8)
        self.pipe_ax.legend(loc='upper right')
        self.pipe_ax.set_ylim(90, 160)  # Fixed y-axis range for pressure
        
        # Add pipe pressure plot to the window
        self.pipe_canvas = FigureCanvasTkAgg(self.pipe_fig, master=left_graph_frame)
        self.pipe_canvas.draw()
        self.pipe_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Create combustion chamber pressure graph
        self.combustion_fig = Figure(figsize=(5, 3), dpi=100)
        self.combustion_ax = self.combustion_fig.add_subplot(111)
        self.combustion_ax.set_title('Combustion Chamber Pressure')
        self.combustion_ax.set_ylabel('Pressure (PSI)')
        self.combustion_ax.set_xlabel('Time (s)')
        self.combustion_line, = self.combustion_ax.plot([], [], 'r-', label='Combustion Chamber', linewidth=1.5)
        self.combustion_ax.grid(True, which='both', linestyle='--', alpha=0.6)
        
        # Add min/max text for combustion chamber pressure
        self.combustion_stats = self.combustion_ax.text(0.02, 0.98, '', transform=self.combustion_ax.transAxes,
                                                      verticalalignment='top', fontsize=8)
        self.combustion_ax.legend(loc='upper right')
        self.combustion_ax.set_ylim(190, 310)  # Fixed y-axis range for pressure
        
        # Add combustion chamber pressure plot to the window
        self.combustion_canvas = FigureCanvasTkAgg(self.combustion_fig, master=right_graph_frame)
        self.combustion_canvas.draw()
        self.combustion_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Create thrust graph
        self.thrust_fig = Figure(figsize=(10, 3), dpi=100)
        self.thrust_ax = self.thrust_fig.add_subplot(111)
        self.thrust_ax.set_title('Thrust Curve')
        self.thrust_ax.set_xlabel('Time (s)')
        self.thrust_ax.set_ylabel('Thrust (N)')
        self.thrust_line, = self.thrust_ax.plot([], [], 'g-', label='Thrust', linewidth=1.5)
        self.thrust_ax.grid(True, which='both', linestyle='--', alpha=0.6)
        
        # Add min/max text for thrust
        self.thrust_stats = self.thrust_ax.text(0.02, 0.98, '', transform=self.thrust_ax.transAxes,
                                              verticalalignment='top', fontsize=8)
        self.thrust_ax.legend(loc='upper right')
        # Scale thrust axis to expected demo peak (~12 N)
        self.thrust_ax.set_ylim(0, 15)  # Fixed y-axis range for thrust
        
        # Add thrust plot to the window
        self.thrust_canvas = FigureCanvasTkAgg(self.thrust_fig, master=bottom_graph_frame)
        self.thrust_canvas.draw()
        self.thrust_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Start updating the plots
        self.update_plots()

    def toggle_ball_valve(self):
        """Toggle the ball valve state (affects pipe pressure).

        This updates the button label and would be the place to send a
        servo command in a real system.
        """
        self.ball_valve_state = not self.ball_valve_state
        state = "OPEN" if self.ball_valve_state else "CLOSED"
        self.ball_valve_btn.configure(text=f"Ball Valve: {state}")
        print(f"Ball Valve {state}")
        # Here you would add the actual servo control code

    def toggle_purge_valve(self):
        """Toggle the emergency purge valve (causes rapid pressure drop in all systems)."""
        self.purge_valve_state = not self.purge_valve_state
        state = "ON" if self.purge_valve_state else "OFF"
        self.purge_valve_btn.configure(text=f"EMERGENCY PURGE: {state}")
        print(f"Emergency Purge {state}")
        # Here you would add the actual servo control code

    def simulate_sensor_reading(self):
        """Demo data generator.

        Returns a tuple (pipe_pressure_psi, combustion_pressure_psi, thrust_newtons).
        Replace this method with a real reader (serial/bluetooth) when you have
        the MCU stream available.
        """
        elapsed_time = time.time() - self.start_time if self.start_time else 0

        # Simulate pipe pressure (affected by ball valve)
        if not self.ball_valve_state:
            # When valve is closed, pressure builds gradually
            if self.last_pipe_pressure < self.target_pipe_pressure:
                self.last_pipe_pressure = min(
                    self.target_pipe_pressure,
                    self.last_pipe_pressure + self.pipe_pressure_rate
                )
        else:
            # When valve is open, pressure decreases gradually
            self.last_pipe_pressure = max(
                0,
                self.last_pipe_pressure - self.pipe_pressure_rate * 2
            )

        # Update pipe pressure min/max
        self.pipe_pressure_min = min(self.pipe_pressure_min, self.last_pipe_pressure)
        self.pipe_pressure_max = max(self.pipe_pressure_max, self.last_pipe_pressure)
        
        # Combustion chamber pressure stays at a constant level
        # Independent of pipe pressure, only affected by purge valve
        if not hasattr(self, 'base_combustion_pressure'):
            self.base_combustion_pressure = 240.0  # Starting baseline
        
        # If purge valve is open, it causes an emergency pressure drop in both systems
        if self.purge_valve_state:
            # Rapid pressure drop in both systems when purge is active
            self.last_pipe_pressure = max(0, self.last_pipe_pressure - self.pipe_pressure_rate * 4)
            self.base_combustion_pressure = max(0, self.base_combustion_pressure - self.pipe_pressure_rate * 4)
        
        # Set combustion chamber pressure to current base level
        self.last_combustion_pressure = self.base_combustion_pressure
        
        # Update combustion chamber pressure min/max
        self.chamber_pressure_min = min(self.chamber_pressure_min, self.last_combustion_pressure)
        self.chamber_pressure_max = max(self.chamber_pressure_max, self.last_combustion_pressure)
        
        # Simulate realistic thrust curve
        if elapsed_time < 0.2:  # Build phase (0-0.2s)
            self.thrust_phase = 'build'
            progress = elapsed_time / 0.2
            self.last_thrust = self.thrust_peak * (progress ** 2)  # Quadratic increase
        
        elif elapsed_time < 0.3:  # Peak phase (0.2-0.3s)
            self.thrust_phase = 'peak'
            self.last_thrust = self.thrust_peak
        
        elif elapsed_time < 0.5:  # Decay phase (0.3-0.5s)
            self.thrust_phase = 'decay'
            progress = (elapsed_time - 0.3) / 0.2
            self.last_thrust = self.thrust_peak - (self.thrust_peak - self.thrust_sustain) * progress
        
        elif elapsed_time < 0.8:  # Sustain phase (0.5-0.8s)
            self.thrust_phase = 'sustain'
            self.last_thrust = self.thrust_sustain
        
        else:  # Shutdown phase (after 0.8s)
            self.thrust_phase = 'shutdown'
            progress = min(1.0, (elapsed_time - 0.8) / 0.2)  # 0.2s shutdown
            self.last_thrust = self.thrust_sustain * (1 - progress)
        
        # Add tiny variations to thrust
        self.last_thrust += random.uniform(-0.05, 0.05)
        self.last_thrust = max(0, self.last_thrust)

        # Update thrust min/max
        self.thrust_min = min(self.thrust_min, self.last_thrust)
        self.thrust_max = max(self.thrust_max, self.last_thrust)

        # Return pipe pressure, combustion chamber pressure, and thrust
        return self.last_pipe_pressure, self.last_combustion_pressure, self.last_thrust

    def update_plots(self):
        """Fetch new sample, append to buffers, redraw plots.

        This runs on a timer via `root.after()` so it must be fast and non-blocking.
        """

        # Simulate new readings (replace with real reader later)
        pipe_pressure, chamber_pressure, thrust = self.simulate_sensor_reading()
        
        # Update data
        current_time = time.time()
        if self.start_time is None:
            self.start_time = current_time
            
        elapsed_time = current_time - self.start_time
        self.times.append(elapsed_time)
        self.pipe_pressure_data.append(pipe_pressure)
        self.chamber_pressure_data.append(chamber_pressure)
        self.thrust_data.append(thrust)
        
        # Function to set up time axis
        def setup_time_axis(ax):
            window_size = 2  # Show 2-second window for better curve visibility
            ax.set_xlim(max(0, elapsed_time - window_size), max(window_size, elapsed_time))
            ax.xaxis.set_major_locator(plt.MultipleLocator(0.2))  # Major ticks every 0.2 seconds
            ax.xaxis.set_minor_locator(plt.MultipleLocator(0.1))  # Minor ticks every 0.1 seconds
            ax.grid(True, which='major', linestyle='-', alpha=0.7)
            ax.grid(True, which='minor', linestyle=':', alpha=0.4)
        
        # Update pipe pressure plot and stats
        self.pipe_line.set_xdata(self.times)
        self.pipe_line.set_ydata(self.pipe_pressure_data)
        self.pipe_stats.set_text(f'Min: {self.pipe_pressure_min:.1f} PSI\nMax: {self.pipe_pressure_max:.1f} PSI\nCurrent: {self.last_pipe_pressure:.1f} PSI')
        setup_time_axis(self.pipe_ax)
        self.pipe_fig.tight_layout()
        self.pipe_canvas.draw()
        
        # Update combustion chamber pressure plot and stats
        self.combustion_line.set_xdata(self.times)
        self.combustion_line.set_ydata(self.chamber_pressure_data)
        self.combustion_stats.set_text(f'Min: {self.chamber_pressure_min:.1f} PSI\nMax: {self.chamber_pressure_max:.1f} PSI\nCurrent: {self.last_combustion_pressure:.1f} PSI')
        setup_time_axis(self.combustion_ax)
        self.combustion_fig.tight_layout()
        self.combustion_canvas.draw()
        
        # Update thrust plot and stats
        self.thrust_line.set_xdata(self.times)
        self.thrust_line.set_ydata(self.thrust_data)
        self.thrust_stats.set_text(f'Min: {self.thrust_min:.1f} N\nMax: {self.thrust_max:.1f} N\nCurrent: {self.last_thrust:.1f} N')
        setup_time_axis(self.thrust_ax)
        self.thrust_fig.tight_layout()
        self.thrust_canvas.draw()
        
        # Schedule the next update
        self.root.after(200, self.update_plots)  # Update every 200ms (5Hz) for smoother curves

if __name__ == "__main__":
    root = tk.Tk()
    app = RocketMonitorApp(root)
    root.mainloop()