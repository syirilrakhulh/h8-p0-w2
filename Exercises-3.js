var nama = 'mikael'
var peran = ''

if (nama === ''){
  console.log('Nama harus diisi!')
}

else if(nama !== '' && peran ===''){
  console.log('Silahkan pilih peran yang kamu inginkan!')
}

else{
  if (peran ==='ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    }
  else if (peran ==='thabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka!')
    }
  else if(peran ==='penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
}