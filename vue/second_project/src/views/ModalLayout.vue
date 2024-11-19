<!-- views/ModalLayout.vue -->
<!--https://www.w3schools.com/howto/howto_css_modals.asp 모달레이아웃 공수-->
<template>
    <div class="modal-container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style>
    .modal-container {
        text-align: center;
        max-width: 40em;
        padding: 2em;
    }
</style>