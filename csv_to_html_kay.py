# using kay's data
import csv

number_of_days_with_values = 0
columns = 28
order = 365 - columns
with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in reader:
        date = row[0]
        min = row[2]
        max = row[1]
        html = f'<div class="day" data-min="{min}" data-max="{max}" style="order: {order}">{date}</div>'
        order += 1;
        if (order % columns == 1):
            order -= columns * 2;
        print(html)
        number_of_days_with_values += 1;
        
while number_of_days_with_values < 365:
    date = "future"
    min = -100
    max = -100
    html = f'<div class="day" data-min="{min}" data-max="{max}" style="order: {order}">{date}</div>'
    order += 1;
    if (order % columns == 1):
        order -= columns * 2;
    print(html)
    number_of_days_with_values += 1;