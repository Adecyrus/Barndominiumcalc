  function calculateCost() {
  const liveableArea = parseInt(document.getElementById('liveableArea').value);
  const nonLiveableArea = parseInt(document.getElementById('nonLiveableArea').value);
  const planType = document.querySelector('input[name="planType"]:checked').value;
  const kit = document.querySelector('input[name="kit"]:checked').value;

  const constructionCostLiveable = liveableArea * getRandomInt(65, 160);
  const constructionCostNonLiveable = nonLiveableArea * getRandomInt(25, 50);
  const planCost = calculatePlanCost(planType);
  const kitCost = calculateKitCost(kit, liveableArea);
  const finishingCost = (liveableArea + nonLiveableArea) * getRandomInt(100, 200);

  const totalCost = constructionCostLiveable + constructionCostNonLiveable + planCost + kitCost + finishingCost;

  const result = document.getElementById('result');
  result.innerHTML = `
    <h3>Cost Breakdown:</h3>
    <p>Construction Cost (Livable Area): $${constructionCostLiveable.toLocaleString()}</p>
    <p>Construction Cost (Non-Livable Area): $${constructionCostNonLiveable.toLocaleString()}</p>
    <p>Plan Cost: $${planCost.toLocaleString()}</p>
    <p>Kit Cost: $${kitCost.toLocaleString()}</p>
    <p>Finishing Cost: $${finishingCost.toLocaleString()}</p>
    <h3>Total Estimated Cost: $${totalCost.toLocaleString()}</h3>
    <p>*Costs include construction, plans, kits, and finishing. Does not include prep, utilities, or interior finish work.</p>
  `;
}

function calculatePlanCost(planType) {
  if (planType === 'stock') {
    return getRandomInt(1300, 2000);
  } else if (planType === 'custom') {
    return getRandomInt(4500, 6000);
  }
}

function calculateKitCost(kit, liveableArea) {
  if (kit === 'materialsOnly') {
    return liveableArea * getRandomFloat(20, 35);
  } else if (kit === 'materialsAndAssembly') {
    return liveableArea * getRandomFloat(30, 50);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

document.getElementById('liveableArea').addEventListener('input', function() {
  document.getElementById('liveableAreaValue').textContent = this.value;
});

document.getElementById('nonLiveableArea').addEventListener('input', function() {
  document.getElementById('nonLiveableAreaValue').textContent = this.value;
});