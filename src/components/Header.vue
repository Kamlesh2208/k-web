<template>
  <div>
    <div class="header-wrap">
      <div class="header-wrap-inner">
        <div class="logo">
          <NuxtLink to="/" :title="t('company.kex')">
            <img src="/images/logo.svg" :alt="t('company.kexLogo')" />
          </NuxtLink>
        </div>
        <div class="navbar-middle">
          <div class="search-bar">
           <!--  <input type="text" placeholder="Search" />
            <i class="search-icon"></i> -->

            <XInputText name='search' v-model='search' placeholder='Search' :isRightIcon='true'/>
            {{search}}

          </div>
          <ul class="supecatMenu sticky-search-active">
            <li>
              <a
                href="/landing?superCatId=7&amp;superCatName=pushchairs-and-travel"
                class="supercat-txt7"
                title="Pushchairs &amp; Travel"
                ><p class="supercat-txt7">Pushchairs &amp; Travel</p></a
              >
            </li>
            <li>
              <a
                href="/landing?superCatId=2&amp;superCatName=clothing"
                class="supercat-txt2"
                title="Clothing"
                ><p class="supercat-txt2">Clothing</p></a
              >
            </li>
            <li>
              <a
                href="/landing?superCatId=4&amp;superCatName=nursery"
                class="supercat-txt4"
                title="Nursery"
                ><p class="supercat-txt4">Nursery</p></a
              >
            </li>
            <li>
              <a
                href="/landing?superCatId=5&amp;superCatName=toys"
                class="supercat-txt5"
                title="Toys"
                ><p class="supercat-txt5">Toys</p></a
              >
            </li>
            <li>
              <a
                href="/landing?superCatId=3&amp;superCatName=feeding"
                class="supercat-txt3"
                title="Feeding"
                ><p class="supercat-txt3">Feeding</p></a
              >
            </li>
            <li>
              <a
                href="/landing?superCatId=1&amp;superCatName=bathing-and-changing"
                class="supercat-txt1"
                title="Bathing &amp; Changing"
                ><p class="supercat-txt1">Bathing &amp; Changing</p></a
              >
            </li>
          </ul>
        </div>
        <div class="header_right">
          <ul class="top-right-link">
            <li>
              <a href="/sell-to-us" class="sell-to-us-head-link"
                ><span class="header-icon"
                  ><img
                    src="/images/common/sell-to-us.svg?v=1.1"
                    width="22"
                    height="22"
                    alt="Sell to Us"
                    class="buy"
                /></span>
                <p>Sell to Us</p></a
              >
            </li>
            <li>
              <a href="Javascript:void(0)" class="login-head-link"
                ><span class="header-icon"
                  ><img
                    src="/images/common/header-account-icon.svg"
                    width="18"
                    height="22"
                    alt="Login"
                    class="buy"
                /></span>
                <p>Login</p></a
              >
              <span
                ><a
                  href="/myaccount"
                  class="login-head-link"
                  style="display: none"
                  ><span class="header-icon"
                    ><img
                      src="/images/common/header-account-icon.svg"
                      width="18"
                      height="22"
                      alt="My Account"
                      class="buy"
                  /></span>
                  <p>My Account</p></a
                ></span
              >
            </li>
            <li>
              <a href="/basket" class="basket-head-link"
                ><span class="basket-notification" style="display: none">
                  0
                </span>
                <span class="header-icon"
                  ><img
                    src="/images/common/header-basket-icon.svg"
                    width="18"
                    height="22"
                    alt="Basket"
                    class="buy"
                /></span>
                <p>Basket</p></a
              >
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="supecatSubMenu">
        <ul class="sub-menu-1">
          <li>
            <a
              href="/products?productLineId=7&amp;productLineName=bath-time"
              class=""
              title="Bath Time"
            >
              Bath Time
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=8&amp;productLineName=changing"
              class=""
              title="Changing"
            >
              Changing
            </a>
          </li>
        </ul>
        <ul class="sub-menu-2">
          <li>
            <a
              href="/products?productLineId=25&amp;productLineName=basics-and-high-street"
              class=""
              title="Basics &amp; High Street"
            >
              Basics &amp; High Street
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=5&amp;productLineName=clothes"
              class=""
              title="Clothes"
            >
              Clothes
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=3&amp;productLineName=footwear-and-accessories"
              class=""
              title="Footwear &amp; Accessories"
            >
              Footwear &amp; Accessories
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=21&amp;productLineName=maternity"
              class=""
              title="Maternity"
            >
              Maternity
            </a>
          </li>
        </ul>
        <ul class="sub-menu-3">
          <li>
            <a
              href="/products?productLineId=9&amp;productLineName=baby-feeding"
              class=""
              title="Baby Feeding"
            >
              Baby Feeding
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=10&amp;productLineName=weening-and-toddler-feeding"
              class=""
              title="Weening &amp; Toddler Feeding"
            >
              Weening &amp; Toddler Feeding
            </a>
          </li>
        </ul>
        <ul class="sub-menu-4">
          <li>
            <a
              href="/products?productLineId=14&amp;productLineName=bedding"
              class=""
              title="Bedding"
            >
              Bedding
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=12&amp;productLineName=furniture"
              class=""
              title="Furniture"
            >
              Furniture
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=13&amp;productLineName=nursery-accessories"
              class=""
              title="Nursery Accessories"
            >
              Nursery Accessories
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=11&amp;productLineName=safety"
              class=""
              title="Safety"
            >
              Safety
            </a>
          </li>
        </ul>
        <ul class="sub-menu-5">
          <li>
            <a
              href="/products?productLineId=15&amp;productLineName=baby-and-toddler-play"
              class=""
              title="Baby &amp; Toddler Play"
            >
              Baby &amp; Toddler Play
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=16&amp;productLineName=kids-toys"
              class=""
              title="Kids Toys"
            >
              Kids Toys
            </a>
          </li>
        </ul>
        <ul class="sub-menu-7">
          <li>
            <a
              href="/products?productLineId=20&amp;productLineName=baby-carriers"
              class=""
              title="Baby Carriers"
            >
              Baby Carriers
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=18&amp;productLineName=prams-pushchairs-and-strollers"
              class=""
              title="Prams, Pushchairs &amp; Strollers"
            >
              Prams, Pushchairs &amp; Strollers
            </a>
          </li>
          <li>
            <a
              href="/products?productLineId=19&amp;productLineName=travel-accessories"
              class=""
              title="Travel Accessories"
            >
              Travel Accessories
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="cx-logo">
      <NuxtLink to="/" :title="t('company.kex')">
         <img src="/img/logo.svg" :alt="t('company.kexLogo')" />
      </NuxtLink>
    </div>

    <XInputText name='search' v-model='search' placeholder='Search' :isRightIcon='true'/>
    search key : {{search}} <br>
    header page -->
  </div>
</template>

<script setup>
import { XInputText } from '@xcom/components'
const search = ref('')
</script>

<style scoped>
.header-wrap {
  padding: 0;
  position: relative;
  z-index: 100;
  min-height: 85px;
  height: 120px;
  overflow: visible;
}

.header-wrap-inner {
  display: flex;
  height: 100%;
  overflow: hidden;
  padding-bottom: 12px;
}

.logo {
  margin: 22px 0 0 35px;
  position: relative;
  display: inline-block;
  flex: 0 0 140px;
}

.logo,
.logo img {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.78, 0.13, 0.15, 0.86);
}

a {
  text-decoration: none;
  outline: 0;
}

.logo img {
  display: block;
  max-width: 140px;
  width: 100%;
}

.navbar-middle {
  margin: 22px 70px 0;
  flex: 1 1 auto;
}
.search-bar {
  background-color: #fff;
  border-radius: 2px;
  padding: 10px 20px;
  margin: 0;
  border: 1px solid #999;
  display: flex;
}

.search-bar > div > div > input {
  border: 0;
  font-size: 14px;
  color: #4a4a4a;
  padding: 0;
  width: calc(100% - 60px);
  line-height: 16px;
  background: transparent;
}
.search-bar .search-icon {
  width: 18px;
  height: 18px;
  background: url(/images/common/header-search-icon.svg) no-repeat 50%;
  float: right;
  color: #4a4a4a;
  transition: all 0.5s;
  cursor: pointer;
  margin: 0 0 0 auto;
}

.supecatMenu {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
}

.supecatMenu li {
  float: left;
  text-align: center;
  position: relative;
}

.supecatMenu li a {
  display: inline-block;
  position: relative;
  padding: 19px 0;
}

.supecatMenu li:first-child a {
  padding-left: 0;
}

.header_right {
  margin: 30px 30px 0 0;
}

.header_right,
.navbar-middle {
  position: relative;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.78, 0.13, 0.15, 0.86);
}

.top-right-link {
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
}

.top-right-link li {
  text-align: center;
  margin: 0 15px;
  position: relative;
  display: inline-block;
}
.top-right-link li:first-child {
  margin-left: 0;
}

.supecatSubMenu {
  background-color: #f6f6f6;
  width: 100%;
  padding: 0;
  float: left;
  position: absolute;
  left: 0;
  margin-top: -12px;
}
.supecatSubMenu ul {
  visibility: hidden;
  opacity: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 0 0 320px;
  float: left;
  width: calc(100% - 320px);
  transition: all 0.5s ease;
  background-color: #f6f6f6;
  box-shadow: inset 0 6px 10px -8px rgba(0, 0, 0, 0.62);
  position: absolute;
}
ol,
ul {
  list-style: none;
}

.supecatSubMenu ul li {
  margin-right: 35px;
  padding: 26px 0;
  float: left;
}
.supecatSubMenu ul li a {
  color: #4a4a4a;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  transition: color 0.5s;
}
</style>
