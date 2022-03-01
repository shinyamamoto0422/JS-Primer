const onClickStartAppearance = () => {
  const startButton = document.getElementById('start_button');
  // 容姿の水準
  startButton.addEventListener('click', () => {
    const appearance_level = Math.floor(Math.random() * (100 - 1) + 1);
    // 容姿の水準が50以上なら最低水準はクリアと表示
  if (appearance_level >= 50) {
    console.log('クリア');
  } else {
    console.log('恋愛対象外です');
  }
  });
}

// なるお流：恋愛マスターを習得する