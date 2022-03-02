<script>
    import Skills from "../mini-components/Skills.svelte";
    export let skills;
</script>
<main>
    <section id="about">  

        <div class="row section-intro">
            <div class="col-twelve">
 
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
 
                <div class="intro-info">
 
                    <img src="images/portfolio/me.jpg" alt="Jaydeep"/>
 
                    <p class="lead">Hey there, I am Jaydeep. 
 I love solving problems and detecting patterns. 
 More than that I love philosophy and science.
 I like working on meaningful projects that could create a net positive impact on society.
 So if you have one I would be happy to join</p>
                </div>   			
 
            </div>   		
        </div>
 
        <div class="row about-content">
 
            <div class="col-six tab-full">
 
                <h3>Profile</h3>
                <p>Ideas drive me to do work, something meaningful that comes out of it that makes the process enjoyable and worthwhile.
  I am working on several meaningful projects, you can look at them by clicking <a href="#portfolio">here</a>.</p>
 
                <ul class="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Jaydeep Vasant Sharma</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>September 18, 2002</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>Full Stack Developer, Creative Writer</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                     <span>www.zerobitcode.com</span> 
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>jaydeep@zerobitcode.com</span>
                    </li>
 
                </ul>
 
            </div>
 
            <div class="col-six tab-full">
 
                <h3>Skills</h3>
                <p>I am a Full Stack Web Developer, which means I can work with any aspect of web development let it be front-end, back-end, or API-related work.
        I am also a creative writer and running two blogs which you can find here.</p>
        
                 <ul class="skill-bars">
                    {#each skills as Skill }
                     <Skills name={Skill.name} percent={Skill.percent} />
                     {/each} 
                 </ul>
        
            </div>
 
        </div>
 
        <div class="row button-section">
            <div class="col-twelve">
                <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
            </div>   		
        </div>
 
    </section>
</main>