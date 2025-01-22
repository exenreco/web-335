"""
Author: Exenreco Bell
Date: January 21, 2025
File Name: Bell_lemonadeStand.py
Description: This program calculates the cost and profit of making lemonade using defined functions.
"""


def calculate_cost(lemons_cost, sugar_cost):
  ''' CALCULATE COST

      Function that calculates the total cost of making lemonade

      @param:

        lemons_cost [number]: The cost of lemons as an integer

        sugar_cost [number]: The cost of sugar as an integer

      @returns:

        total_cost [number]: The total cost of sugar and lemons,
                          otherwise prints an error
  '''

  # lemon cost and sugar cost must be given
  if lemons_cost and sugar_cost:

    # Returning the total cost rounded to 2 decimals
    return round(lemons_cost + sugar_cost, 2)

  else:
    # invalid type or unspecified param
    print(f"to calculate the cost a number is expected for both parameters:")
    print(f"  - for the cost of lemons - a {type(lemons_cost)} was given!")
    print(f"  - for the cost of sugar - a {type(sugar_cost)} was given!")
    exit('Error (1)')



def calculate_profit(lemons_cost, sugar_cost, selling_price):
  ''' CALCULATE PROFIT

      Function to calculate the profit from selling lemonade

      @param:

        lemons_cost [number]: The cost of lemons as an integer

        sugar_cost [number]: The cost of sugar as an integer

        selling_price [number]: The profit amount as an integer

      @returns:

        profit [number]: The amount made after subtracting the cost
                         of sugar and lemons from the total price.
  '''

  # Calculating total cost
  total_cost = calculate_cost(lemons_cost, sugar_cost)

  if total_cost and selling_price:

    # Calculating profit
    profit = round(selling_price - total_cost, 2)

    # Returning the profit
    return profit

  else:
    # invalid value given as total
    print(f"Failed to calculate a profit, try again!")
    exit('Error (2)')


''' FUNCTION TESTs BEGINS HERE
'''
# sugar variable
sugar_cost = 3.5

# lemons variable
lemons_cost = 5

# Selling price variable
selling_price = 15

# cost variable
cost = calculate_cost(lemons_cost, sugar_cost)

# profit variable
profit = calculate_profit(lemons_cost, sugar_cost, selling_price)

# cost result variable
cost_result = f"(cost of lemon) + (cost of sugar) = (total cost)\n{lemons_cost} + {sugar_cost} = ${cost}"

# profit result variable
profit_result = f"selling Price - [(cost of lemon) + (cost of sugar)] = (Profit)\nProfit: ${profit}\n\n"

# Printing the result strings
print(f"\n{cost_result}\n\n{profit_result}")
