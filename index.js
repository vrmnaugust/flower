const title = document.querySelector('.title');
const text = 'Happy I Love U Day'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span style="display: inline-block; opacity: 0; transform: scale(0.8);">${text[index]}<span/>`;
  } else {
    title.innerHTML += `<span style='margin-right: 20px; display: inline-block; opacity: 0; transform: scale(0.8);'><span/>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 1; // Delay acak antara 0 hingga 1 detik
  element.style.animation = `fadeInScale 1.5s ${randomDelay}s ease forwards`;
});

// Tambahkan keyframe animation di dalam JavaScript
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `
@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`;
document.head.appendChild(styleSheet);
