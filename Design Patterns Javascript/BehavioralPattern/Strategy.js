// Strategy pattern allows you to switch the algorithm or strategy based upon the situation.

const bubbleSort = dataset => {
    console.log('Sorting with bubble sort');
    //complete bubble sort on dataset
    return dataset;
}

const quickSort = dataset => {
    console.log('Sorting with quick sort');
    //complete quick sort on dataset 
    return dataset;
}

const sorter = dataset => {
    if (dataset.length > 5) {
        return quickSort;
    }
    else {
        return bubbleSort;
    }
}

const longDataset = [1, 5, 4, 3, 2, 8];
const shortDataset = [1, 5, 4];

const sorter1 = sorter(longDataset);
const sorter2 = sorter(shortDataset);

sorter1(longDataset);
sorter2(shortDataset);

/*
Output:
Sorting with quick sort
Sorting with bubble sort
*/