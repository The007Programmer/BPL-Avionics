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
        
        # Data storage (simulate last 50 samples)
        self.max_points = 50
        self.times = deque(maxlen=self.max_points)
        self.pressure_data = deque(maxlen=self.max_points)
        self.temperature_data = deque(maxlen=self.max_points)
        
        # Initialize with some data
        current_time = time.time()
        for i in range(self.max_points):
            self.times.append(current_time + i)
            self.pressure_data.append(0)
            self.temperature_data.append(0)
        
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
        
        # Create side-by-side graph frames
        left_graph_frame = ttk.Frame(graph_frame)
        left_graph_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        right_graph_frame = ttk.Frame(graph_frame)
        right_graph_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # Create pressure graph
        self.pressure_fig = Figure(figsize=(5, 4))
        self.pressure_ax = self.pressure_fig.add_subplot(111)
        self.pressure_ax.set_title('Pressure Readings')
        self.pressure_ax.set_ylabel('Pressure (PSI)')
        self.pressure_line, = self.pressure_ax.plot([], [])
        
        # Add pressure plot to the window
        self.pressure_canvas = FigureCanvasTkAgg(self.pressure_fig, master=left_graph_frame)
        self.pressure_canvas.draw()
        self.pressure_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Create temperature graph
        self.temp_fig = Figure(figsize=(5, 4))
        self.temp_ax = self.temp_fig.add_subplot(111)
        self.temp_ax.set_title('Temperature Readings')
        self.temp_ax.set_ylabel('Temperature (°C)')
        self.temp_line, = self.temp_ax.plot([], [], 'r')
        
        # Add temperature plot to the window
        self.temp_canvas = FigureCanvasTkAgg(self.temp_fig, master=right_graph_frame)
        self.temp_canvas.draw()
        self.temp_canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
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
        # Simulate pressure (100-150 PSI with some noise)
        pressure = 125 + random.uniform(-25, 25)
        
        # Simulate temperature (20-30°C with some noise)
        temperature = 25 + random.uniform(-5, 5)
        
        return pressure, temperature

    def update_plots(self):
        # Simulate new readings
        pressure, temperature = self.simulate_sensor_reading()
        
        # Update data
        current_time = time.time()
        self.times.append(current_time)
        self.pressure_data.append(pressure)
        self.temperature_data.append(temperature)
        
        # Update pressure plot
        self.pressure_line.set_xdata(np.array(self.times) - current_time)  # Show relative time
        self.pressure_line.set_ydata(self.pressure_data)
        self.pressure_ax.relim()
        self.pressure_ax.autoscale_view()
        self.pressure_fig.tight_layout()
        self.pressure_canvas.draw()
        
        # Update temperature plot
        self.temp_line.set_xdata(np.array(self.times) - current_time)  # Show relative time
        self.temp_line.set_ydata(self.temperature_data)
        self.temp_ax.relim()
        self.temp_ax.autoscale_view()
        self.temp_fig.tight_layout()
        self.temp_canvas.draw()
        
        # Schedule the next update
        self.root.after(100, self.update_plots)  # Update every 100ms

if __name__ == "__main__":
    root = tk.Tk()
    app = RocketMonitorApp(root)
    root.mainloop()
