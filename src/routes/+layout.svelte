<script>
  import "../app.css";  
</script>

<div class="flex flex-col min-h-screen">
	<div class="flex gap-2 justify-end flex-shrink mt-3 mr-3">
		<a
			href="https://www.facebook.com/fermento.mq"
			target="_blank"
			class="flex h-10 w-10 rounded-full justify-center items-center my-auto bg-lime-600"
		>
			<img class="h-8 w-8" src="./img/facebook.svg" alt="facebook"/>
		</a>
		<a
			href="https://www.instagram.com/fermento.mq"
			target="_blank"
			class="flex h-10 w-10 rounded-full justify-center items-center my-auto bg-lime-600"
		>
			<img class="h-8 w-8" src="./img/instagram.svg" alt="instagram"/>
		</a>
		<a
			href="mailto:info@fermento.mq"
			target="_blank"
			class="flex h-10 w-10 rounded-full justify-center items-center my-auto bg-lime-600"
		>
			<img class="h-8 w-8" src="./img/email.svg" alt="e-mail"/>
		</a>
		<a
			href="tel:+596696160736"
			target="_blank"
			class="flex h-10 w-10 rounded-full justify-center items-center my-auto bg-lime-600"
		>
			<img class="h-8 w-8" src="./img/phone.svg" alt="phone"/>
		</a>
	</div>
  <div class="grow mx-auto flex justify-items-center content-center">
    <slot />
  </div>
</div>
