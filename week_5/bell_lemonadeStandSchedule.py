"""
Author: Exenreco Bell
Date: February 6, 2025
File Name: bell_lemonadeStandSchedule.py
Description: This program manages a weekly schedule for a lemonade stand using lists, loops, and conditionals.
"""

# List of tasks for the lemonade stand
tasks = [
  "Buy lemons and supplies",
  "Make fresh lemonade",
  "Set up the stand and start selling",
  "Track daily sales and expenses",
  "Clean up and prepare for the next day"
]

# List of days in a week
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

''' CHECK LIST

    Handles printing tasks of the lemonade stand.

    @params

      tasks {array} - An array of task to be done at the lemonade stand.
'''
def checkList( tasks = [] ):
  print("\nTasks for running a lemonade stand:\n")
  for task in tasks:
    # Printing the tasks
    print(f"  [] {task}\n")


''' STAND SCHEDULE

    Handles printing the lemonade stand schedule

    @params

      tasks {array} - An array of task to be done at the lemonade stand.

      days {array} - An array containing the days of the week.
'''
def standSchedule( tasks = [], days = [] ):
  print("\nWeekly Lemonade Stand Schedule:\n")
  # Assigning tasks to days and handling weekends
  for i, day in enumerate(days):
    if day in ["Saturday", "Sunday"]:
        print(f"  * {day}: Day off! Time to rest.\n")
    else:
        print(f"  * {day}: {tasks[i % len(tasks)]}\n")


# execute the tasks list
checkList( tasks=tasks )

# execute  schedule
standSchedule( tasks=tasks, days=days )
