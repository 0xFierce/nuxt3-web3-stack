<script lang='ts' setup>

</script>

<template>

    <div class="flex flex-col justify-between min-h-screen p-4 bg-white">
     
      <div class="">

        <div class="flex justify-end">
          <WalletConnectButton />
        </div>

        <main class="">
          <slot />
        </main>
      </div>

    </div>
</template>