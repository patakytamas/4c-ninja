<script>
  import QrCode from 'svelte-qrcode';
  export let value;
</script>

<QrCode {value} />
