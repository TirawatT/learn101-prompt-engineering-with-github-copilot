# func string to array string
def string_to_array(string):
    return string.split(' ')

# func array string to string
def array_to_string(array, separate=' '):
    return separate.join(array)

txt = "hello world"
print(txt)
print(string_to_array(txt))
print(array_to_string(string_to_array(txt), '-'))   