<style lang="scss">
nav {
  a {
    padding: 8px 24px;
  }
}
</style>
<template>
  <div>
    <header>
      <nav>
        <img src="/assets/images/gorila.svg" width="32px" />
      </nav>
    </header>
    <main>
      <a href="#about"><MdiIcon icon="mdiAccount" /> About</a>
      <a href="#links"><MdiIcon icon="mdiLink" /> Links</a>
      <div id="about">
        <hr color="black" />
        <h1>Hi, there👋</h1>
        <h2>I'm 070ry!</h2>
        <ul>
          <li>🌏I'm live in Japan.</li>
          <li>🦜I speak Japanese.</li>
          <li>🏫I'm high school student. I'm 17 years old.</li>
          <li>🤓I like TypeScript and .</li>
          <li>🦍I like gorila emoji</li>
          <li>🥚I love boiled eggs!</li>
          <li>🎮My favorite game is Minecraft.</li>
          <li>📺My favorite anime/manga is "お兄ちゃんはおしまい！" and "愚かな天使は悪魔と踊る"</li>
          <li>💻I'm using Windows 11 Home/Pro and ZorinOS 17 Core and Ubuntu 22.04.6 LTS</li>
          <li>💖My favorite characters is...</li>
          <ul>
            <li type="circle"><strong>Mahiro Oyama</strong> and <strong>Mihari Oyama</strong> from "お兄ちゃんはおしまい！"</li>
            <li type="circle"><strong>Lily Amane</strong> from "愚かな天使は悪魔と踊る"</li>
            <li type="circle"><strong>Arisu Sakayanagi</strong> and <strong>Kiyotaka Ayanokouji</strong> from "ようこそ実力至上主義の教室へ"</li>
            <li type="circle"><strong>Liesch</strong> from "薬屋のひとりごと"</li>
            <li type="circle">
              <strong>Frieren</strong>, <strong>Himmel</strong>, <strong>Eisen</strong>, <strong>Fern</strong>, <strong>Flamme</strong> from "葬送のフリーレン"
            </li>
            <li type="circle"><strong>Shiori Katase</strong> from "うちの会社の小さい先輩の話"</li>
            <li type="circle"><strong>Anos Voldigord</strong> from "魔王学院の不適合者"</li>
            <li value="*">There may be a translation error.</li>
          </ul>
        </ul>
      </div>
      <div id="links">
        <ul>
          <li>
            Github: <NuxtLink to="https://github.com/070ry">070ry</NuxtLink>,
            <NuxtLink to="https://github.com/i14a-dsc">i14a-dsc</NuxtLink>
          </li>
          <li>
            Discord: <NuxtLink to="https://discord.com/users/880410653058289685">@070ry</NuxtLink>,
            <NuxtLink to="https://discord.com/users/1072283404722257950">@i14a</NuxtLink>,
            <NuxtLink to="https://discord.com/users/649922410103046145">@i14a_</NuxtLink>
          </li>
          <li>YouTube: <NuxtLink to="https://youtube.com/@070ry">@070ry</NuxtLink></li>
          <li class="links-hp">
            Homepages: <br /><br />
            <NuxtLink to="https://onews.f5.si">old(onews)</NuxtLink> (repo: <NuxtLink to="https://github.com/070ry/onews">070ry/onews</NuxtLink>),<br /><br />
            <NuxtLink to="https://old-070ry.pages.dev">old(070ry)</NuxtLink> (repo:
            <NuxtLink to="https://github.com/070ry/old">070ry/old</NuxtLink>),<br /><br />
            <NuxtLink to="https://070ry.pages.dev">now (with nuxt3)</NuxtLink> (repo: <NuxtLink to="https://github.com/070ry/new">070ry/new</NuxtLink>)
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
