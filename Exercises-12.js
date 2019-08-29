function konversiMenit(menit) {
    konv1 = menit / 60
    konv2 = menit % 60
    if(menit >= 60){
        if(konv2<10){
            return Math.floor(konv1) + ':0' + konv2
        }
        return Math.floor(konv1) + ':' + konv2
    }
    else{
        if(menit<10){
            return '0:0' + menit
        }
        return '0:' + menit
    }
  }
  
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));