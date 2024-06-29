// Typescript is a language built on top of javascruipt

//Benefits of typescripts
//1. Better error feedback
const reverse = (str: string) => {
    return str.split('').reverse().join('');
}

// 2 - Better autocomplete and code hint
const reversed = reverse('hello');
reversed.concat('world');

// 3 - Custom types
interface MenuItem {
    title: string;
    cost: number;
} 

const item: MenuItem = {
    title: 'Item',
    cost: 10
}

const printItem = (item: MenuItem) => {
    console.log(item.title, ':', item.cost);
}

//Error 1
// printItem();

// Error 2
// printItem('iy', 5);

// Error 3
// printItem({title: 'Sunshine', cost: '70'});

// Error 4
// printItem({name: 'Sunshine', cost: '70'});

// correct example
// printItem({title: 'Black moon', cost: '70'});


// 4 Self documenting - Navigates through the variablle
// printItem();

