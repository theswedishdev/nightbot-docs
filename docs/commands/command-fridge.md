# Fridge
Let the viewers try getting something from the fridge.

## Usage
`!fridge`

### Example
`!fridge`

```
@TheSwedishDev took a can of soda from the fridge, enjoy!
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !fridge $(user) took $(eval const responses = ['a can of soda', 'milk', 'leftovers', 'cheese', 'yogurt', 'cheesecake', 'chocolate mousse', 'maple syrup', 'avocados', 'a banana', 'watermelon', 'some eggs', 'a carrot', 'butter', 'lemons', 'orange juice', 'pesto', 'bacon', 'olives', 'spekling water', 'leftover pizza', 'cake', 'salad', 'strawberry jam', 'strawberries', 'blueberries', 'kiwis', 'tomatoes', 'an apple', 'cookie dough', 'broccoli', 'smoked salmon', 'mustard', 'ketchup', 'a piece of pie']; responses[Math.floor(Math.random() * responses.length)];) from the fridge, enjoy!
```