function arrayToObject(arr){
    let date = new Date()

    let umurAbduhMuhammad = null
    let umurAhmadTaufik = null

    if(arr[0][3] >= date.getFullYear()){
        umurAbduhMuhammad = 'Invalid Birth Year'
    } else if(arr[0][3] == null){
        umurAbduhMuhammad = 'Invalid Birth Year'
    } else {
        umurAbduhMuhammad = date.getFullYear() - arr[0][3]
    }

    if(arr[1][3] >= date.getFullYear()){
        umurAhmadTaufik = 'Invalid Birth Year'
    } else if(arr[1][3] == null){
        umurAhmadTaufik = 'Invalid Birth Year'
    } else {
        umurAhmadTaufik = date.getFullYear() - arr[1][3]
    }
    
    let convertObject = {
        '1. Abduh Muhammad' : {
            firstName : arr[0][0],
            lastName : arr[0][1],
            gender : arr[0][2],
            age : umurAbduhMuhammad
        },
        '2. Ahmad Taufik' : {
            firstName : arr[1][0],
            lastName : arr[1][1],
            gender : arr[1][2],
            age : umurAhmadTaufik
        }
    }

    console.log(convertObject);
}


let people = [
    [
        'Abduh',
        'Muhammad',
        'male',
        1992
    ],
    [
        'Ahmad',
        'Taufik',
        'male',
        1985
    ]
]

arrayToObject(people)