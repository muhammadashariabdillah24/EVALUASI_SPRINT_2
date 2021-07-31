for (let x = 0; x <= 17; x++) {
    for (let y = 0; y <= 17; y++) {
        if(x == y){
            if(x % 2 == 1){
                document.write(x)
            }
        }

        if(x + y == 17){
            if(y % 2 == 0){
                document.write(y)
            }
        }

        if(x && y == 8){
            if(x % 2 == 1){
                document.write(x)
            }
        }

        if(y && x == 9){
            if(y % 2 == 0){
                document.write('___' + y)
            }
        } else {
            document.write('---')
        }
    }
    document.write('<br>')
}