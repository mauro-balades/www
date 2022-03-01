


# Build brainfuck in rust

In this blog, I will explain you how to build a brainfuck interpreter in [rust](https://www.rust-lang.org/). In this little brainfuck interpreter, you will be able to learn rust basics, iterate every character and do an action with the current character.

You will also be able to learn brainfuck's basics and how it does work in the background.


<!-- .. toc:: Table of Contents
   :depth: 4 -->

## What is brainfuck?

The idea behind `brainfuck` is memory manipulation. Basically you are given an array of 30,000 1byte memory blocks. The array size is actually dependent upon the implementation used in the compiler or interpretor, but standard brainfuck states 30,000. Within this array, you can increase the memory pointer, increase the value at the memory pointer, etc. Let me first present to you the 8 operators available to us.

```bf
    > = increases memory pointer, or moves the pointer to the right 1 block.
    < = decreases memory pointer, or moves the pointer to the left 1 block.
    + = increases value stored at the block pointed to by the memory pointer
    - = decreases value stored at the block pointed to by the memory pointer
    [ = like c while(cur_block_value != 0) loop.
    ] = if block currently pointed to's value is not zero, jump back to [
    , = like c getchar(). input 1 character.
    . = like c putchar(). print 1 character to the console
```

**Some rules:**

* Any arbitrary character besides the 8 listed above should be ignored by the compiler or interpretor. Characters besides the 8 operators should be con- sidered comments.
* All memory blocks on the "array" are set to zero at the beginning of the program. And the memory pointer starts out on the very left most memory block.
* Loops may be nested as many times as you want. But all [ must have a corre- sponding ].


## Initializing project

To initialize a new rust project, simply run the following command on the terminal.

```shell
$ cargo new brainfuck
```

**note**: You can replace `brainfuck` with whatever the name you whant for your project.

## Imports

We need to include this imports to read from `stdin` and to split the source code into an array of characters and iterate it.

```rust
use std::io::Read;
use std::str::Chars;
```

## Function declarations

In `src/main.rs`, the file will contain nothing, we are declaring the function declaration. We will fill those code blocks and understand what they are doing.

```rust
fn do_left_bracket(chars: Chars, index: i32) -> i32 {

}

fn do_right_bracket(chars: Chars, index: i32) -> i32 {

}

fn brainfuck(programm: String) -> [u8; 3000] {

}

fn main() {

}
```

### Main function

First things first. We are going to declare the brainfuck's source code and parse it's content. Note that the function returns an array of 3000 `u8`s (`[u8; 3000]`).

```rust
fn main() {

    // Declare the source code for the brainfuck programm
    let code = String::from("...");

    // Interpret the source code
    brainfuck(code);
}
```

**note**: You need to replace `...` with your brainfuck code (e.g. `++++>-.`).

### Brainfuck interpreter

The `brainfuck()` function will be the main function to interpret the source code. The function will do all of the logistics while it is parsing every token. This function will return all cells used for the programm incase you whant to debug it.

We are using a switch/match statement and it is very well commented so that you can easelly add a new characters and expand the language so that you can make it what ever you whant to be.

```rust
fn brainfuck(programm: String) -> [u8; 3000] {
    let mut cells: [u8; 3000] = [0; 3000];
    let possition: &mut usize = &mut 0;
    let chars: Chars = programm.chars();

    let mut index: i32 = 0;
    while index < chars.clone().count().try_into().unwrap() {
        let cur_char = chars.clone().nth(index.try_into().unwrap()).unwrap();

        match cur_char {

            // Increment value by 1 in current cell possition.
            // if the curren't value for the cell is 255,
            // we will set it to 0.
            '+' => {
                let mut cell: u8 = cells[*possition];

                if cell == 255 {
                    cell = 0;
                } else {
                    cell = cell.wrapping_add(1);
                }

                cells[*possition] = cell;
            }

            // Decrement value by 1 in current cell possition
            '-' => {
                let mut cell: u8 = cells[*possition];

                if cell == 0 {
                    cell = 255;
                } else {
                    cell = cell.wrapping_sub(1);
                }

                cells[*possition] = cell;
            }

            // Move the current possition to the next cell
            '>' => {
                if *possition as i32 == 2999 {
                    *possition = 0
                } else {
                    *possition += 1
                }
            }

            // Go back one cell
            '<' => {
                if (*possition as i32) == 0 {
                    *possition = 2999;
                } else {
                    *possition =
                        *&mut ((*possition as usize).checked_sub(1)).unwrap_or_default() as usize;
                }
            }

            // Print the current cell's ASCII value.
            '.' => print!("{}", cells[*possition] as char),

            // Set value from stdin to the current cell
            ',' => {
                // declare a new buffer array containing a
                // 'u8' type number to store a character code
                let mut buf = [0; 1];

                // Read input and check if an error has occoured.
                match std::io::stdin().read_exact(&mut buf) {
                    Ok(_) => cells[*possition] = buf[0], // Add buffer from input
                    Err(_) => {} // Throw an error or do what ever you whant.
                }
            }

            // Left brackets are like c while(cur_block_value != 0) loop.
            '[' => {
                if cells[*possition] == 0 {
                    index = do_left_bracket(chars.clone(), index)
                }
            }

            // if block currently pointed to's value is not zero, jump back to [
            ']' => {
                if cells[*possition] != 0 {
                    index = do_right_bracket(chars.clone(), index)
                }
            }

            // In Brainfuck, other ASCII characters that
            // are not ["+", ",", "-", "<", ">", ".", "[", "]"]
            // they are considered as comments, so we do nothing.
            _ => (),
        }

        index += 1;
    }

    return cells;
}
```

**note**: Everything that is not one of those character will be considered as a comment. This is not because I am too lazy to write errors, but because it is a brainfuck standard,

#### Steps

1. We declare all variables such as: cells, current pointer's possition and characters of the source code as an array.
2. An iteration for every character in the source code. Once we will reach to the end, the loop will stop iterating since the condition will not be true.
3. We retrieve the character at the current index. After that, we are going to compare it to all brainfuck's characters. If there is not match, we just don't do anything.
    - Instructions in `Match statement`
4. After the match statement, we increment the index by one, meaning that the current character has already been interpreted.

#### Match statement
- (`.`): Output the current value's cell to `stdout` asuming it is an ASCII character.
- (`,`): Get the first letter from `stdin` and set it's ASCII number to the current cell.
- (`+`): We increment 1 to the current cell. If the value is already `255`, we will reset it to `0`
- (`-`): Decrement the value of the current cell by `1`. If the value is `0` we will reset it to `255`
- (`<`): Move the cell pointer to the left. If the pointer is already at the top left, we will move it to the last cell.
- (`>`): We move the cell pointer to the right. If the pointer is already at the top right, we will move it to the first cell.
- (`[`): If the current cell is equal to `0`, we will handle the left bracket in `do_left_bracket()`.
    - here: `Left bracket`
- (`[`): If the current cell is not equal to `0`, we will handle the right bracket in `do_right_bracket()`.
    - here: `Right bracket`

### Left bracket

In this function, we are handling the `[` character. We increment the index by `1` until we find the closing `]`. After we found the respective closing character, we return the index of the ending character.

```rust
fn do_left_bracket(chars: Chars, index: i32) -> i32 {
    let mut ix: i32 = index;
    let mut open = 1;
    while open != 0 {
        ix += 1;

        match chars.clone().nth(ix.try_into().unwrap()).unwrap() {
            '[' => open += 1,
            ']' => open -= 1,
            _ => (),
        }
    }

    return ix
}
```

### Right bracket

The purpose of this function haves (nearly) the same functionality as the `do_left_bracket()` function. We basically get back to the left character and return it's index.

```rust
fn do_right_bracket(chars: Chars, index: i32) -> i32 {
    let mut ix: i32 = index;
    let mut close = 1;
    while close != 0 {
        ix -= 1;

        if ix >= chars.clone().count().try_into().unwrap() {
            panic!("couldn't find next matching ']'");
        }

        match chars.clone().nth(ix.try_into().unwrap()).unwrap() {
            '[' => close -= 1,
            ']' => close += 1,
            _ => (),
        }

    }

    return ix
}
```

### We are done!

To run the programm, just run the following command on the terminal to compile and run.

```shell
$ cargo run
```

## Example programm

Whant an example of a brainfuck programm?

```brainfuck
>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<+
+.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-
]<+.
```

Try it out and see what it does.
