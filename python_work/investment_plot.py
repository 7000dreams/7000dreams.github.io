# A program to generate a chart, showing market value and investment values at specified intervals.

import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.ticker import FuncFormatter

# Data
data = {
    'Date': [
        '2023-12-01', '2024-01-01', '2024-02-01', '2024-03-01',
        '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01',
        '2024-08-01', '2024-08-07'
    ],
    'Cost of Investment': [
        3823721, 3878721, 4008102, 4738609,
        5734255, 5826178, 6826910, 7128210,
        7853863, 8306493
    ],
    'Market Value of Investment': [
        4145027, 4214299, 4270001, 5106209,
        6174563, 6384201, 7404232, 8052302,
        8982848, 9307847
    ]
}

# Create DataFrame
df = pd.DataFrame(data)

# Convert Date to datetime
df['Date'] = pd.to_datetime(df['Date'])

# Set DPI and calculate figure size in inches
dpi = 100
width_in_inches = 960 / dpi
height_in_inches = width_in_inches * (4/8)  # Proportional height to width

# Define the custom formatter function
def currency_formatter(x, pos):
    return f'{int(x/1e5):,}'

# Plotting with adjusted figure size and reduced font size for X-axis labels
plt.figure(figsize=(width_in_inches, height_in_inches), dpi=dpi)
plt.plot(df['Date'], df['Cost of Investment'], label='Cost of Investment', marker='o')
plt.plot(df['Date'], df['Market Value of Investment'], label='Market Value of Investment', marker='o')

# Formatting the plot
plt.xlabel('Date')
plt.ylabel('Amount in millions')
plt.title('Investment Cost vs Market Value Over Time')
plt.legend()
plt.grid(True)
plt.xticks(df['Date'], df['Date'].dt.strftime('%d-%b-%y'), rotation=45, fontsize=8)

# Apply the custom formatter to the Y-axis
plt.gca().yaxis.set_major_formatter(FuncFormatter(currency_formatter))

plt.tight_layout()

# Show the plot
plt.show()
