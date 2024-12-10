<script>
    export let title;
    export let description;
    export let image;
  </script>
  
  <div class="card">
    <img src={image} alt="the description" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  
  <style>
    .card {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 1rem;
      max-width: 180px;
      row-gap: 0.3rem; 
    }

    h4, p {
      margin: 0;
    }
    
    img {
      width: 100%;
      height: auto;
      max-width: 180px;
    }
  </style>