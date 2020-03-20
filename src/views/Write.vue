<template>
  <div> 
<p> <br> </p>
<div class="submitwrap">
    <div class="wraping"> 
      <div contenteditable="true" class="writebox">
    Paste meme url here!
  </div>
  <a href="#" class="myButton">Submit</a>
    </div>
    </div>

  </div>

</template>

<style>
.submitwrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.wraping {

  display: flex;
  flex-direction: column;


  background-color: #ffffff;
    border-radius: 4px;
    width: 50%;
    height: 50%;
    /* justify-self: center; */
    align-self: center;
    text-align: center;
    
    top: 100px;
    
    
    
    padding: 20px;
}

.writebox {
  height: 50%;
  width: 90%;
}
</style>