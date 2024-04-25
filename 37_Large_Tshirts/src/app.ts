function make_shirt(size: string = 'Large', message: string = 'I love typescript'): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
  }
  
  make_shirt();
  make_shirt('Medium');
  make_shirt('small' , 'i love python');