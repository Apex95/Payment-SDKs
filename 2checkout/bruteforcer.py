def encode(b,c,d):
    e = b >> 2
    f = (3 & b) << 4 | c >> 4
    h = (15 & c) << 2 | d >> 6
    i = 63 & d

    return e, f, h, i

def bruteforce_step(e_c, f_c, h_c, i_c):

    for b in range(128):
        e = b >> 2
        
        if not e == e_c:
            continue
        
        for c in range(128):

            f = (3 & b) << 4 | c >> 4
            
            if not f == f_c:
                continue

            for d in range(128):
                h = (15 & c) << 2 | d >> 6

                if not h == h_c:
                    continue

                i = 63 & d

                if not i == i_c:
                    continue

                return b, c, d
                
                
bruteforce_step(16, 20, 9, 3)


index = 0
array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

recovered_public_api_key = ''
encoded_public_api_key = "MDhBREI2MEQtNzQwQi00RUQwLTgyQ0YtM0YzOTVDRDAwQUI2"

for index in range(0, len(encoded_public_api_key), 4):
    
    
    e_c = array.index(encoded_public_api_key[index])
    f_c = array.index(encoded_public_api_key[index + 1])
    h_c = array.index(encoded_public_api_key[index + 2])
    i_c = array.index(encoded_public_api_key[index + 3])

    b, c, d = bruteforce_step(e_c, f_c, h_c, i_c)

    recovered_public_api_key += chr(b) + chr(c) + chr(d)


print(recovered_public_api_key)