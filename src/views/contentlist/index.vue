<template>
<div class="contentlist">
  <!-- 筛选数据 -->
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>全部图文</span>
  </div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="全部"></el-radio>
      <el-radio label="草稿"></el-radio>
      <el-radio label="待审核"></el-radio>
      <el-radio label="审核通过"></el-radio>
      <el-radio label="审核失败"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="频道列表">
    <el-select v-model="form.region" placeholder="请选择频道列表">
      <el-option label="搞笑" value="shanghai"></el-option>
      <el-option label="娱乐" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="时间选择">
  <el-date-picker
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
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
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
     <el-button type="primary" icon="el-icon-edit" circle></el-button>
    </el-table-column>
  </el-table>
</div>

</template>
<script>
export default {
  data () {
    return {
      form: {
        region: '',
        date1: '',
        date2: '',
        resource: ''
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
    getlist () {
      const token = window.localStorage.getItem('user-token')
      this.$axios({
        // 添加请求头
        headers: {
          Authorization: `Bearer ${token}`
        },
        url: '/articles',
        method: 'get'
      }).then(result => {
        console.log(result.data)

        this.tableData = result.data.data.results
      }).catch(() => {
        console.log('请求失败')
      })
    }
  },
  created () {
    this.getlist()
  }
}
</script>

<style>

</style>
