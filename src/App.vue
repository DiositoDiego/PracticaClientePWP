<script setup></script>

<template>
  <div>
    <div>
      <b-navbar type="dark" style="margin-left: 45vh;" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <b-link :to="{ name: 'formulario' }"> Formulario </b-link>
          </b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div style="display: flex">
      <div style="width: 118vh; height: 100vh"></div>
      <div>
        <div>
          <b-sidebar
            id="sidebar-no-header"
            aria-labelledby="sidebar-no-header-title"
            no-header
            shadow
            visible
          >
            <template #default="{  }">
              <div class="p-3">
                <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>
            </template>
          </b-sidebar>
        </div>

        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
