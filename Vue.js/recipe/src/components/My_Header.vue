<template>
    <v-app-bar absolute app light style="background-color: white;">
       <dvi>
        <v-img  src="../assets/logo.png" style="width: 40px;"></v-img>
       </dvi>
        <div style="margin: auto;">
            <v-img style="width: 40px;"  src="../assets/logo.png" ></v-img>
            <s_search>
            <fieldset>
            <input type="text"  value="" placeholder="찾을 내용을 입력하세요." >
            <button type="button">검색</button>
            </fieldset>
            </s_search>
        </div>
    </v-app-bar>
        <v-app-bar absolute app light style="background-color: white;">
        <v-toolbar-title class="pl-12 ml-12" style="cursor: pointer;">
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn>sadsadsadsadsa</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn>종류</v-btn>
            <v-btn>오메추</v-btn>
            <v-btn>오메픽</v-btn>
            <v-btn>랭킹</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default{};
</script>

<style scope>
div{
    position: sticky;

    border-bottom: 5px solid #ebebeb;
}
input{
    width: 200px;
    
}
</style>