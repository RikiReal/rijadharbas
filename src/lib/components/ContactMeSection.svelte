<section id="contact-me" aria-labelledby="contact-heading">
	<div class="flex flex-col items-center justify-start gap-20 md:mx-20 2xl:gap-56">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<h2 id="contact-heading" class="col-span-1 mb-8 text-4xl font-bold lg:col-span-2">
				Let's have a talk
			</h2>
			<div class="prose flex flex-col space-y-7 lg:prose-lg xl:prose-xl">
				<!-- Contact invitation text -->
				<p>
					Got a project in mind or just want to say hi? Let's make something amazing together. Reach
					out and let the collaboration begin!
				</p>

				<!-- Social media links -->
				<h3 class="text-xl font-semibold">Follow me!</h3>
				<div class="flex justify-start gap-10">
					<a href="your-social-media-link" aria-label="Follow on Social Media 1">
						<img src="#" alt="Social Media 1" />
					</a>
					<a href="your-social-media-link" aria-label="Follow on Social Media 2">
						<img src="#" alt="Social Media 2" />
					</a>
					<a href="your-social-media-link" aria-label="Follow on Social Media 3">
						<img src="#" alt="Social Media 3" />
					</a>
				</div>
				<!-- ICP Banner (add link to canister around it) -->
				<div class="flex items-center justify-center md:justify-start">
					<img
						src="/banner.svg"
						alt="100% On-Chain ICP Banner"
						class="max-w-xs object-cover lg:max-w-sm"
					/>
				</div>
			</div>
			<!-- 
					I don't know yet how to integrate the form into my webpage and mail provider. 
					I could maybe look into if mailchimp has an API that I can connect to and that sends new form submission to tutanota.
				 -->
			<!-- Contact form -->
			<form class="contact-form" action="your-server-side-script" method="POST">
				<div class="form-group">
					<label for="firstname">Your Firstname</label>
					<input type="text" id="firstname" name="firstname" required />
				</div>
				<div class="form-group">
					<label for="lastname">Your Lastname</label>
					<input type="text" id="lastname" name="lastname" required />
				</div>
				<div class="form-group">
					<label for="email">Your Email Address</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div class="form-group">
					<label for="inquiry">Your Inquiry</label>
					<textarea id="inquiry" name="inquiry" rows="4" required></textarea>
				</div>
				<button type="submit">Send</button>
			</form>
		</div>
	</div>
</section>

<!-- <p>
    https://tally.so/help/developer-resources


    I could use tally - a free form builder tool and form provider.
    However, the embed form option requires javascript to run, which some might not have enabled.

    Instead, I could create a regular form and on my server submit it to tally by using http outcalls.
</p> -->
