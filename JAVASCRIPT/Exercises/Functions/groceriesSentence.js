const groceries = arr => {
    let items = arr.map(a => a.item);
    let lastItem = items.pop();
    if (arr.length > 1) {
      return `${items.join(', ')} and ${lastItem}`;
    } else {
      return lastItem;
    }
  }
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  console.log(groceries([{item: 'Ice Cream'}]));