
# Build brainfuck in rust

In this blog, I will explain you how to build a brainfuck interpreter in [rust](https://www.rust-lang.org/). In this little brainfuck interpreter, you will be able to learn rust basics, iterate every character and do an action with the current character.

You will also be able to learn brainfuck's basics and how it does work in the background.


## What is brainfuck?

The idea behind `brainfuck` is memory manipulation. Basically you are given an array of 30,000 1byte memory blocks. The array size is actually dependent upon the implementation used in the compiler or interpretor, but standard brainfuck states 30,000. Within this array, you can increase the memory pointer, increase the value at the memory pointer, etc. Let me first present to you the 8 operators available to us.

    > = increases memory pointer, or moves the pointer to the right 1 block.
    < = decreases memory pointer, or moves the pointer to the left 1 block.
    + = increases value stored at the block pointed to by the memory pointer
    - = decreases value stored at the block pointed to by the memory pointer
    [ = like c while(cur_block_value != 0) loop.
    ] = if block currently pointed to's value is not zero, jump back to [
    , = like c getchar(). input 1 character.
    . = like c putchar(). print 1 character to the console

**Some rules:**

* Any arbitrary character besides the 8 listed above should be ignored by the compiler or interpretor. Characters besides the 8 operators should be con- sidered comments.
* All memory blocks on the "array" are set to zero at the beginning of the program. And the memory pointer starts out on the very left most memory block.
* Loops may be nested as many times as you want. But all [ must have a corre- sponding ].


## Initializing project

To initialize a new rust project, simply run the following command on the terminal.

    $ cargo new brainfuck

