<template>
    <div class="divda">
        <div class="divda_d1">
            <div class="divda_d1_d1">
                <img class="divda_d1_d1_img1" src="../assets/img1.jpg"/>
                <input class="divda_d1_d1_input1" type="text" value="北大青鸟" readonly="readonly" disabled="disabled">
            </div>
        </div>



    </div>




</template>

<style>
  body{
     margin: 0px;
  }
  .divda{
    width:100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  .divda_d1{
    display: flex;

    margin: 0px;
    width:100%;
    height:447px;
    background: url("../assets/img3.jpg") no-repeat;
    background-size: 100%;
  }
  .divda_d1_d1_img1{
    margin:79px 279px;
    width:192px;
    height:192px;
    border-radius: 50%;
  }
  .divda_d1_d1{
    position:relative;
    display: flex;
    justify-content: center;
  }
  .divda_d1_d1_input1{
    text-decoration: none;
    list-style: none;
    border: none;
    background-color: inherit;
    font-size: 19px;
    color: white;
    position:absolute;
    top: 285px;
    left: 260px;
    text-align: center;

  }

</style>


