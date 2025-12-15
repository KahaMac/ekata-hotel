(function() {
	// Theme toggle with localStorage + prefers-color-scheme
	const themeToggle = document.getElementById('theme-toggle');
	const getPref = () => localStorage.getItem('theme');
	const setPref = (t) => localStorage.setItem('theme', t);
	const applyTheme = (t) => {
		if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
		else document.documentElement.removeAttribute('data-theme');
		updateToggleIcon();
	};
	const updateToggleIcon = () => {
		if (!themeToggle) return;
		const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
		themeToggle.innerHTML = isDark
			? '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>'
			: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m12.95 6.95l1.41 1.41M4.64 4.64l1.41 1.41m12.02 0l1.41-1.41M4.64 19.36l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
	};
	const initTheme = () => {
		const stored = getPref();
		if (stored) return applyTheme(stored);
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme(prefersDark ? 'dark' : 'light');
	};
	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
			const next = isDark ? 'light' : 'dark';
			setPref(next);
			applyTheme(next);
			showToast(`Switched to ${next} theme`);
		});
	}
	initTheme();

	// Mobile nav toggle
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.getElementById('nav-menu');
	if (navToggle && navMenu) {
		navToggle.addEventListener('click', () => {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			navMenu.style.display = expanded ? 'none' : 'flex';
			navMenu.style.flexDirection = 'column';
			navMenu.style.gap = '.25rem';
		});
	}
	// Members submenu toggle
	document.querySelectorAll('.nav-sub-toggle').forEach(btn => {
		btn.addEventListener('click', () => {
			const expanded = btn.getAttribute('aria-expanded') === 'true';
			const submenuId = btn.getAttribute('aria-controls');
			const submenu = document.getElementById(submenuId);
			btn.setAttribute('aria-expanded', String(!expanded));
			if (submenu) submenu.hidden = expanded;
		});
	});

	// Modal controls
	document.querySelectorAll('[data-open-modal]').forEach(trigger => {
		trigger.addEventListener('click', () => {
			const sel = trigger.getAttribute('data-open-modal');
			const modal = document.querySelector(sel);
			openModal(modal);
		});
	});
	document.querySelectorAll('[data-close-modal]').forEach(btn => {
		btn.addEventListener('click', () => {
			const modal = btn.closest('.modal');
			closeModal(modal);
		});
	});
	function openModal(modal) {
		if (!modal) return;
		modal.classList.add('is-open');
		modal.removeAttribute('aria-hidden');
		const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
		if (focusable) focusable.focus();
	}
	function closeModal(modal) {
		if (!modal) return;
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
	}
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			document.querySelectorAll('.modal.is-open').forEach(closeModal);
		}
	});
	document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
		backdrop.addEventListener('click', () => closeModal(backdrop.closest('.modal')));
	});

	// Toast API
	const toastEl = document.getElementById('toast');
	window.showToast = (msg, timeout = 2400) => {
		if (!toastEl) return;
		toastEl.textContent = msg;
		toastEl.classList.add('show');
		clearTimeout(window.__toastTimer);
		window.__toastTimer = setTimeout(() => toastEl.classList.remove('show'), timeout);
	};
})();


