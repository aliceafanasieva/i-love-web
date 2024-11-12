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
      align-items: center;
      text-align: center;
      padding: 1rem;
    }
    
    img {
      width: 100%;
      height: auto;
      max-width: 150px;
      border-radius: 8px;
    }
  </style>