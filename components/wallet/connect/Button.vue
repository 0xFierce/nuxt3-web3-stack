<script lang='ts' setup>

const { isConnected, address } = useAccount()

const { disconnect } = useDisconnect()

const [isOpen, open] = useToggle()

</script>

<template>
    <button
        @click="isConnected ? disconnect() : open()"
        class="flex justify-end"
    >   
        <div class="flex items-center border-2 px-4 py-2 rounded-xl">
           {{ isConnected ? shortAddressFilter(address) : 'Connect Wallet' }}
        </div>
    </button>

    <WalletConnectSidebar
        :is-open="isOpen"
        @close="isOpen = false"
    />
    
</template>