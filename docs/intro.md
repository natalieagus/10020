---
sidebar_position: 1
---

# Tutorial Intro

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_! This is a test.

## Getting Started

Get started by **creating a new site**.

> Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

<details>
<summary>Deep Dive</summary>
<p>

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

#### Tower of Hanoi

```py live_py
def towerOfHanoi(numrings, from_pole, to_pole, aux_pole):
    if numrings == 1:
        print("Move ring 1 from", from_pole, "pole to", to_pole, "pole")
        return
    towerOfHanoi(numrings - 1, from_pole, aux_pole, to_pole)
    print("Move ring", numrings, "from", from_pole, "pole to", to_pole, "pole")
    towerOfHanoi(numrings - 1, aux_pole, to_pole, from_pole)


numrings = 5
towerOfHanoi(numrings, "Left", "Right", "Middle")
```

#### Random

```py live_py
import random

array = [random.randint(0, 100) for _ in range(10)]
print(array)
```

#### Merge Sort

```py live_py

def merge(array_1, array_2):
    merged = []

    array_1_pointer = 0
    array_2_pointer = 0

    while array_1_pointer < len(array_1) and array_2_pointer < len(array_2):
        if array_1[array_1_pointer] <= array_2[array_2_pointer]:
            merged.append(array_1[array_1_pointer])
            array_1_pointer += 1
        else:
            merged.append(array_2[array_2_pointer])
            array_2_pointer += 1

    # copy the larger remaining array to merged
    if array_1_pointer < len(array_1):
        merged.extend(array_1[array_1_pointer:])
    elif array_2_pointer < len(array_2):
        merged.extend(array_2[array_2_pointer:])

    return merged


def merge_sort(array):
    if len(array) <= 1:
        return array  # already sorted
    else:
        left = merge_sort(array[: len(array) // 2])  # split left
        right = merge_sort(array[len(array) // 2 :])  # split right
        merged = merge(
            left, right
        )  # merge what's returned by the split from each side
        return merged  # return the sorted array

array = [3,3,5,12,-36,32,0,2,4]
output = merge_sort(array)
print("output", output)
```

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
