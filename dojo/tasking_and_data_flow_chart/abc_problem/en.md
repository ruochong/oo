You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

    ((B O)
    (X K)
    (D Q)
    (C P)
    (N A)
    (G T)
    (R E)
    (T G)
    (Q D)
    (F S)
    (J W)
    (H U)
    (V I)
    (A N)
    (O B)
    (E R)
    (F S)
    (L Y)
    (P C)
    (Z M))

The goal of this task is to write a function that takes a string and can determine whether you can spell the word with the given collection of blocks. The rules are simple:
- Once a letter on a block is used that block cannot be used again
- The function should be case-insensitive
- Show your output on this page for the following words:

## Example
 
    >>> can_make_word("A")
    True
    >>> can_make_word("BARK")
    True
    >>> can_make_word("BOOK")
    False
    >>> can_make_word("TREAT")
    True
    >>> can_make_word("COMMON")
    False
    >>> can_make_word("SQUAD")
    True
    >>> can_make_word("CONFUSE")
    True
 