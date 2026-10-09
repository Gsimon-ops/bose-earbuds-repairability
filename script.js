const root = document.documentElement;
const toast = document.getElementById('toast');
async function sharePage() {
  const isFrench = root.lang === 'fr';
  const shareData = {
    title: document.title,
    text: isFrench
      ? "Mon expérience avec des écouteurs Bose devenus inutilisables après un simple changement d'embout."
      : 'My experience with Bose earbuds that became unusable after a routine ear-tip change.',
    url: window.location.href
  };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(window.location.href);
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 1800);
    }
  } catch (error) {
    if (error.name !== 'AbortError') console.error(error);
  }
}
document.getElementById('shareButton').addEventListener('click', sharePage);
document.getElementById('closingShare').addEventListener('click', sharePage);
