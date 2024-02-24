<script lang='ts' setup>

withDefaults(defineProps<{
    isOpen: boolean
    aside?: string
}>(), {
    isOpen: false,
    aside: 'right-0'
})

const emit = defineEmits(['close'])

</script>

<template>

    <teleport to="body">
        <div class="">
        
            <div v-show="isOpen" @click="emit('close')" class="bg-[#1d2129]/10 fixed inset-0 z-[50]"></div>

            <aside
                
                :class="[
                    isOpen ? 'transform-none right-2 py-2' : 'translate-x-full',
                    aside
                ]"
                class="fixed top-0 z-50 w-full md:w-auto h-screen transition-transform right-0"
            >
                <div class="flex flex-row w-full h-full">
                    <div class="z-20 w-full md:w-80 h-full px-3 overflow-y-auto rounded-xl bg-white">
                        <slot />
                    </div>
                </div>
            </aside>
        </div>
    </teleport>

</template>