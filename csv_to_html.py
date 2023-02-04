# using weather station 08546's data for year 2022
# https://dev.meteostat.net/bulk/daily.html
import csv

columns = 28
order = 365 - columns
with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in reader:
        # convert to dd-mm format
        date = row[0][8:11] + "-" + row[0][5:7]
        min = row[2]
        max = row[3]
        html = f'<div class="day" data-min="{min}" data-max="{max}" style="order: {order}">{date}</div>'
        order += 1;
        if (order % columns == 1):
            order -= columns * 2;
        print(html)