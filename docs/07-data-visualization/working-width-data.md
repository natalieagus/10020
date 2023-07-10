---
sidebar_position: 1
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Working With Data

<ChatBaseBubble/>

### Goals

By the end of this lesson, you should be able to:

- Create a **Panda's DataFrame** and selecting data from DataFrame
- Using library to read `CSV` or `EXCEL` file
- Give example of **linear regression and classification**
- **Split** data randomly into training set and testing set
- **Normalize** data using min-max normalization

:::keyword Keywords
`Data Frame, Series, index, column, vectorized operation, normalization, z-norm, min-max, dataset, test, training, validation set`
:::

# Short Introduction to Machine Learning

In the previous weeks we have discussed how various computation can be done. We begin by discussing computational complexity and divide and conquer strategy through recursion. We then discusses how data can have computation associated with it through object oriented programming. We discussed several data structures and algorithms associated with various problems. We then end up with offering a different perspective by looking at computation as a state machine.

In this second half of the course, we will look into how computation can learn from data in order to make a new computation. This new computation is often called a **prediction**. In these lessons, we focus on what is called as **supervised machine learning**. The word supervised machine learning indicates that the computer learns from some existing data on how to compute the prediction. An example of this would be given some images labelled as "cat" and "not a cat", the computer can learn to predict (or to compute) whether any a new image given to it is a cat or not a cat.

|                                            cat                                             |                               not a cat                               |
| :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![](https://upload.wikimedia.org/wikipedia/commons/f/ff/Cat_on_laptop_-_Just_Browsing.jpg) | ![](https://upload.wikimedia.org/wikipedia/commons/4/49/Catfish.jpeg) |

Another example would be given a some data of housing prices in Singapore with the year of sale, area, number of rooms, and its floor hight, the computer can predict the price of another house. One other example would be given data of breast cancer cell and its measurements, one can predict whether the cell is malignant or benight. Supervised machine learning assumes that we have some existing data **labelled** with this category "malignant" and "benign". Using this labelled data (supervised), the computer can predict the category given some new data.

## Reading Data

The first step in machine learning would be to understand the data itself. In order to do that we need to be able to read data from some source. One common source is a text file in the form of CSV format (comma separated value). Another common format is Excel spreadsheet. The data can be from some databases or some server. Different data sources will require different ways of handling it. But in all those cases we will need to know how to read those data.

For this purpose we will use [Pandas](https://pandas.pydata.org/) library to read our data. We import the data into our Python code by typing the following code.

```python
import pandas as pd
```

Now we can use Pandas functions to read the data. For example, if we want to read a CSV file, we can simply type:

```python
df = pd.read_csv('mydata.csv')
```

Let's take an example of Singapore housing prices. We can get some of these data from [Data.gov.sg](https://data.gov.sg/). We have downloaded the CSV file so that you can access it simply from the following [dropbox link](https://www.dropbox.com/s/jz8ck0obu9u1rng/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv?raw=1). We can use the url to the raw file to open the CSV in our Python code.

<><iframe src="https://trinket.io/embed/python3/83a9aa0665?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

:::tip
We can also treat this data frame as a kind of matrix to find its shape using `df.shape`.
:::

As we can see, the data contains 95858 rows and 11 columns. One of the column names is called `resale_price`. Since our aim is to predict the house price, this column is usually called the **target**. The rest of the columns is called the **features**. This means that we have about 10 feature columns.

The idea supervised machine learning is that using the given data such as shown above, the computer would like to predict what is the _target_ give a new set of _features_. The computer does this by _learning_ the existing labelled data. The label in this case is the resale price from the historical sales data.

In order to understand the data, it is important to be able to manipulate and work on the data frame.

## Data Frame Operations

It is important to know how to manipulate the data. Pandas has two data structures:

- [Series](https://pandas.pydata.org/docs/user_guide/dsintro.html#series)
- [DataFrame](https://pandas.pydata.org/docs/user_guide/dsintro.html#dataframe)

You can consider `Series` data as one-dimensional labelled array while `DataFrame` data as two-dimensional labelled data structure. For example, the table that we saw previously, which is the output of `read_csv()` function, is a `DataFrame` because it has both rows and columns and, therefore, two dimensional. On the other hand, we can access just one of the columns from the data frame to get a `Series` data.

### Getting a Column or a Row as a Series

You can access the column data as series using the square bracket operator.

```python
df[column_name]
```

```python
print(df['resale_price'])
print(type(df['resale_price']))
```

The code above prints the column `resale_price` and its type.

> It can be seen that the type of the output is a `Series` data type.

You can also get some particular row by specifying its `index`.

You can access the column using the `.loc[index, column]` method. In this method, you need to specify the labels of the index. For example, to access all the rows for a particular column called `resale_price`, we can do as follows. Notice that we use `:` to access all the rows. Moreover, we specify the name of the columns in the code below.

```python
print(df.loc[:, 'resale_price'])
print(type(df.loc[:, 'resale_price']))
```

In the above code, we set the index to access all rows by using `:`. Recall that in Python's list slicing, we also use `:` to access all the element. Similarly here, we use `:` to access all the rows. In a similar way, we can use `:` to access all the columns, e.g. `df.loc[:, :]` will copy the whole data frame.

This also gives you a hint how to access a particular row. Let's say, you only want to access the first row, you can type the following.

```python
print(df.loc[0, :])
print(type(df.loc[0, :]))
```

In the above code, we access the first row, which is at index 0, and all the columns.

Recall that all these data are of the type `Series`. You can create a Data Frame from an existing series just like when you create any other object by instantiating a `DataFrame` object and passing on an argument as shown below.

```python
df_row0 = pd.DataFrame(df.loc[0, :])
df_row0
```

·
Here's all the code so far in action:

<><iframe src="https://trinket.io/embed/python3/b96543051f?start=result" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></>

### Getting Rows and Columns as DataFrame

The operator `:` works similar to Python's slicing. This means that you can get some rows by slicing them. For example, you can access the first 10 rows as follows.

```python
df_new = df.loc[0:10, :]
```

:::think
What would be the datatype of `df_new`?
:::
