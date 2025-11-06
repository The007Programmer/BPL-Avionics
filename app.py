import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import numpy as np
import random
from collections import deque
import time

class RocketMonitorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Rocket Monitor System")
        
        # Data storage (simulate last 1000 samples at 100ms = 100 seconds of data)
        self.max_points = 1000
        self.times = deque(maxlen=self.max_points)
        self.pipe_pressure_data = deque(maxlen=self.max_points)
        self.chamber_pressure_data = deque(maxlen=self.max_points)
        self.thrust_data = deque(maxlen=self.max_points)
        self.start_time = None
        
        # For smooth data simulation
        self.last_pipe_pressure = 125
        self.last_chamber_pressure = 250
        self.last_thrust = 0
        
        # For min/max tracking
        self.pipe_pressure_min = float('inf')
        self.pipe_pressure_max = float('-inf')
        self.chamber_pressure_min = float('inf')
        self.chamber_pressure_max = float('-inf')
        self.thrust_min = float('inf')
        self.thrust_max = float('-inf')
        
        # Initialize with some data
        current_time = time.time()
        for i in range(self.max_points):
            self.times.append(current_time + i)
            self.pipe_pressure_data.append(0)
            self.chamber_pressure_data.append(0)
            self.thrust_data.append(0)
        
        # Create main container
        main_frame = ttk.Frame(root)
        main_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
        
        # Create graph frame
        graph_frame = ttk.Frame(main_frame)
        graph_frame.pack(fill=tk.BOTH, expand=True)
        
        # Create control frame
        control_frame = ttk.Frame(main_frame)
        control_frame.pack(fill=tk.X, pady=(10, 0))
        
        # Ball Valve Toggle
        self.ball_valve_state = False
        self.ball_valve_btn = ttk.Button(
            control_frame,
            text="Ball Valve: CLOSED",
            command=self.toggle_ball_valve,
            width=20
        )
        self.ball_valve_btn.pack(side=tk.LEFT, padx=10, expand=True)
        
        # Purge Valve Toggle
        self.purge_valve_state = False
        self.purge_valve_btn = ttk.Button(
            control_frame,
            text="Purge Valve: CLOSED",
            command=self.toggle_purge_valve,
            width=20
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
        
        # Create chamber pressure graph
        self.chamber_fig = Figure(figsize=(5, 3), dpi=100)
        self.chamber_ax = self.chamber_fig.add_subplot(111)
        self.chamber_ax.set_title('Chamber Pressure')
        self.chamber_ax.set_ylabel('Pressure (PSI)')
        self.chamber_ax.set_xlabel('Time (s)')
        self.chamber_line, = self.chamber_ax.plot([], [], 'r-', label='Chamber Pressure', linewidth=1.5)
        self.chamber_ax.grid(True, which='both', linestyle='--', alpha=0.6)
        
        # Add min/max text for chamber pressure
        self.chamber_stats = self.chamber_ax.text(0.02, 0.98, '', transform=self.chamber_ax.transAxes,
                                                verticalalignment='top', fontsize=8)
        self.chamber_ax.legend(loc='upper right')
        self.chamber_ax.set_ylim(190, 310)  # Fixed y-axis range for pressure
        
        # Add chamber pressure plot to the window
        self.chamber_canvas = FigureCanvasTkAgg(self.chamber_fig, master=right_graph_frame)
        self.chamber_canvas.draw()
        self.chamber_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
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
        self.thrust_ax.set_ylim(0, 1100)  # Fixed y-axis range for thrust
        
        # Add thrust plot to the window
        self.thrust_canvas = FigureCanvasTkAgg(self.thrust_fig, master=bottom_graph_frame)
        self.thrust_canvas.draw()
        self.thrust_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Start updating the plots
        self.update_plots()

    def toggle_ball_valve(self):
        self.ball_valve_state = not self.ball_valve_state
        state = "OPEN" if self.ball_valve_state else "CLOSED"
        self.ball_valve_btn.configure(text=f"Ball Valve: {state}")
        print(f"Ball Valve {state}")
        # Here you would add the actual servo control code

    def toggle_purge_valve(self):
        self.purge_valve_state = not self.purge_valve_state
        state = "OPEN" if self.purge_valve_state else "CLOSED"
        self.purge_valve_btn.configure(text=f"Purge Valve: {state}")
        print(f"Purge Valve {state}")
        # Here you would add the actual servo control code

    def simulate_sensor_reading(self):
        # Simulate smoother pipe pressure changes (small delta from previous reading)
        delta_pipe = random.uniform(-0.2, 0.2)  # Much smaller variations
        self.last_pipe_pressure = max(90, min(160, self.last_pipe_pressure + delta_pipe))
        
        # Update pipe pressure min/max
        self.pipe_pressure_min = min(self.pipe_pressure_min, self.last_pipe_pressure)
        self.pipe_pressure_max = max(self.pipe_pressure_max, self.last_pipe_pressure)
        
        # Simulate smoother chamber pressure changes
        delta_chamber = random.uniform(-0.3, 0.3)  # Much smaller variations
        self.last_chamber_pressure = max(190, min(310, self.last_chamber_pressure + delta_chamber))
        
        # Update chamber pressure min/max
        self.chamber_pressure_min = min(self.chamber_pressure_min, self.last_chamber_pressure)
        self.chamber_pressure_max = max(self.chamber_pressure_max, self.last_chamber_pressure)
        
        # Simulate smoother thrust changes
        if self.start_time is None or time.time() - self.start_time < 2.0:
            # Thrust buildup phase (slower)
            delta_thrust = random.uniform(0.5, 1.5)
        elif time.time() - self.start_time > 8.0:
            # Thrust reduction phase (slower)
            delta_thrust = random.uniform(-1.5, -0.5)
        else:
            # Steady thrust phase (much smaller variations)
            delta_thrust = random.uniform(-0.3, 0.3)
        
        self.last_thrust = max(0, min(1000, self.last_thrust + delta_thrust))
        
        # Update thrust min/max
        self.thrust_min = min(self.thrust_min, self.last_thrust)
        self.thrust_max = max(self.thrust_max, self.last_thrust)
        
        return self.last_pipe_pressure, self.last_chamber_pressure, self.last_thrust

    def update_plots(self):
        # Simulate new readings
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
            ax.set_xlim(max(0, elapsed_time - 5), max(5, elapsed_time))  # Show 5-second window
            ax.xaxis.set_major_locator(plt.MultipleLocator(0.2))  # Major ticks every 0.2 seconds
            ax.xaxis.set_minor_locator(plt.MultipleLocator(0.1))  # Minor ticks every 0.1 seconds
            ax.grid(True, which='major', linestyle='-', alpha=0.7)
            ax.grid(True, which='minor', linestyle=':', alpha=0.4)
        
        # Update pipe pressure plot
        self.pipe_line.set_xdata(self.times)
        self.pipe_line.set_ydata(self.pipe_pressure_data)
        setup_time_axis(self.pipe_ax)
        self.pipe_fig.tight_layout()
        self.pipe_canvas.draw()
        
        # Update chamber pressure plot
        self.chamber_line.set_xdata(self.times)
        self.chamber_line.set_ydata(self.chamber_pressure_data)
        setup_time_axis(self.chamber_ax)
        self.chamber_fig.tight_layout()
        self.chamber_canvas.draw()
        
        # Update thrust plot
        self.thrust_line.set_xdata(self.times)
        self.thrust_line.set_ydata(self.thrust_data)
        setup_time_axis(self.thrust_ax)
        self.thrust_fig.tight_layout()
        self.thrust_canvas.draw()
        
        # Schedule the next update
        self.root.after(20, self.update_plots)  # Update every 20ms (50Hz)

if __name__ == "__main__":
    root = tk.Tk()
    app = RocketMonitorApp(root)
    root.mainloop()
