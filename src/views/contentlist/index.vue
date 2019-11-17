<template>
<div class="contentlist">
  <!-- 筛选数据 -->
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>全部图文</span>
  </div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章状态">
    <el-radio-group v-model="form.status">
      <el-radio :label="null">全部</el-radio>
      <el-radio label="0">草稿</el-radio>
      <el-radio label="1">待审核</el-radio>
      <el-radio label="2">审核通过</el-radio>
      <el-radio label="3">审核失败</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="频道列表">
    <el-select  placeholder="请选择频道列表" v-model ="form.channels_id">
      <el-option :value='null' label='所有频道'></el-option>
      <el-option :label="item.name" :value="item.id" v-for="item in form.channels" :key='item.id'></el-option>

    </el-select>
  </el-form-item>
   <el-form-item label="时间选择">
  <el-date-picker
      v-model="form.rangeData"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format='yyyy-MM-dd'
      >
    </el-date-picker>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onselect">查询</el-button>
  </el-form-item>
</el-form>
</el-card>
<!-- 文章列表 -->
  <el-table style="width: 100%" :data='tableData' >
    <el-table-column
      label="封面"
      width="180">
      <template slot-scope="scope">
            <img width="50" :src="scope.row.cover.images[0]">
          </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      label="状态">
      <template slot-scope = "scope">
       <el-tag :type='state[scope.row.status].value'>{{state[scope.row.status].label}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="pubdate"
      label="发布日期"
      width="180">
    </el-table-column>
    <el-table-column
      label="操作"
      width="180">
      <template slot-scope="scope">
      <el-button type="danger" icon="el-icon-delete" circle @click="ondelete(scope.row.id)"></el-button>
     <el-button type="primary" icon="el-icon-edit" circle ></el-button>
     </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000" @current-change='oncurrentPage'>
</el-pagination>
</div>

</template>
<script>
export default {
  name: 'aaa',
  data () {
    return {
      form: {
        region: '',
        date1: '',
        date2: '',
        status: null,
        channels: [],
        channels_id: null,
        rangeData: []

      },
      tableData: [],
      state: [
        {
          value: '',
          label: '草稿'
        },
        {
          value: 'info',
          label: '待审核'
        },
        {
          value: 'success',
          label: '审核通过'
        },
        {
          value: 'warning',
          label: '审核失败'
        },
        {
          value: 'danger',
          label: '已删除'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    getlist (page) {
      const token = window.localStorage.getItem('user-token')
      this.$axios({
        // 添加请求头
        headers: {
          Authorization: `Bearer ${token}`
        },
        url: '/articles',
        method: 'get',
        params: {
          page,
          per_page: 10,
          status: this.form.status,
          channel_id: this.form.channels_id,
          begin_pubdate: this.form.rangeData[0],
          end_pubdate: this.form.rangeData[1]
        }

      }).then(result => {
        this.tableData = result.data.data.results
      }).catch(() => {
        console.log('请求失败')
      })
    },
    oncurrentPage (page) {
      this.getlist(page)
    },
    onselect () {
      this.getlist()
    },
    ondelete (id) {
      this.$axios({
        url: `/articles/${id}`,
        method: 'delete'
      }).then(result => {
        console.log(result)
      }).catch(() => {
        console.log('请求失败')
      })
    },
    getchannels () {
      this.$axios({
        url: '/channels',
        method: 'get'
      }).then(result => {
        console.log(result.data)
        this.form.channels = result.data.data.channels
      })
    }
  },

  created () {
    this.getlist()
    this.getchannels()
  }
}
</script>

<style lang="less" scoped>
.el-pagination.is-background{
  text-align: center
}
</style>
