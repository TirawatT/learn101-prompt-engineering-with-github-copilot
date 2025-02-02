# func string to array string
def string_to_array(string):
    return string.split(' ')

# func array string to string
def array_to_string(array, separate=' '):
    """
    Convert an array of strings into a single string with a specified separator.

    Parameters:
    array (list): The list of strings to join.
    separate (str): The separator to use between elements. Default is a space.

    Returns:
    str: The joined string.
    """
    return separate.join(array)

txt = "hello world"
print(txt)
print(string_to_array(txt))
print(array_to_string(string_to_array(txt), '-'))