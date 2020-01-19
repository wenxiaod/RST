<template>
  <div>
    <el-tabs v-model="active" @tab-click="onClick" @tab-remove="onRemove">
      <el-tab-pane v-for="(item, index) in tabs" :label="item.title" :closable="item.closable" :name="item.id"
        :key="index">

        <component :is="item.component" v-bind="item.props" :tab-id="item.id" ref="comp" :lazy="true" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: "NavigationController",
    data() {
      return {
        active: null,
        tabs: ["首页", "产品"]
      };
    },
    props: ["components", "hideSingleTab"],
    watch: {
      tabs: function (val) {
        if (this.hideSingleTab == true) {
          this.showTabs(val.length > 1);
          if (val.length == 1) {
            this.active = this.tabs[0].id;
          }
        }
      }
    },
    provide() {
      var tab = this;
      return {
        $tab: {
          remove(id) {
            tab.remove(id);
          },
          add(tab) {
            tab.add(tab);
          }
        }
      };
    },
    methods: {
      tabIndex: function (id) {
        var tabs = this.tabs;
        for (var i = 0; i < tabs.length; ++i) {
          if (tabs[i].id == id) {
            return i;
          }
        }
      },
      onClick(tab) {
        var index = tab.index;
        //   var tab = this.tabs[index];
        this.$emit("select", tab);
        this.$refs.comp[index].$emit("select", tab);
      },
      onRemove(tab) {
        var index = this.tabIndex(tab);
        this.$emit("remove", this, this.tabs[index]);
      },
      remove(id) {
        var index = this.tabIndex(id);
        if (index >= 0) {
          var removed = this.tabs.splice(index, 1);
          if (this.tabs.length > 0) {
            if (removed[0].id == this.active) {
              this.active = this.tabs[index - 1].id;
            }
            if (document.activeElement) {
              document.activeElement.blur();
            }
          }
        }
      },
      add(tab) {
        this.tabs.push(tab);
        this.active = tab.id;
      },
      showTabs(f) {
        var elem = $(this.$el).find(".el-tabs__header");
        if (f) {
          elem.show();
        } else {
          elem.hide();
        }
      },
      tabComponent(id) {
        var index = this.tabIndex(id);
        if (index >= 0) {
          return this.$refs.comp[index];
        }
      }
    },
    created() {
      var tabs = this.components;
      if (tabs && tabs.length > 0) {
        this.tabs = tabs;
        this.active = tabs[0].id;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>