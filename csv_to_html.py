# weather station 08546
# https://dev.meteostat.net/bulk/daily.html
import csv

# last day of the year has wrong order but we only display the first 355 anyway
# in leap year that would apply to last two days?
columns = 28
order = 365 - columns
with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in reader:
        date = row[0][5:]
        min = row[2]
        max = row[3]
        html = f'<div class="day" data-min="{min}" data-max="{max}" style="order: {order}">{date}</div>'
        order += 1;
        if (order % columns == 1):
            order -= columns * 2;
        print(html)