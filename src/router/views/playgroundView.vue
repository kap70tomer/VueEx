
<template>

    <md-table>

        <md-table-row>
          <md-table-head>ID</md-table-head>
          <md-table-head>Avatar</md-table-head>
          <md-table-head>First Name</md-table-head>
          <md-table-head>Last Name</md-table-head>
          <md-table-head>E-mail</md-table-head>
        </md-table-row>


        <md-table-row v-for="profile of tdata" :key="profile.id">
          <md-table-cell>{{profile.id}}</md-table-cell>
          <md-table-cell><img :src="profile.avatar"></md-table-cell>
          <md-table-cell>{{profile.first_name}}</md-table-cell>
          <md-table-cell>{{profile.last_name}}</md-table-cell>
          <md-table-cell>{{profile.email}}</md-table-cell>
        </md-table-row>
        {{tdata}}
    </md-table>
</template>

<script>

// import {mapGetters} from 'vuex'

export default {

  page: {
    // title: 'Profile Table',
    name: 'viewTable',
    props:['tdata','config']
    ,
    data:()=>({tdata:[]})

  },
}
</script>
