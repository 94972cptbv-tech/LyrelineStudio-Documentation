# Lyreline Studio Feedback

Use this form to prepare a plain-text report. Nothing entered here is sent to a
server or saved by Lyreline Studio. **Copy Feedback** places the report on your
clipboard; **Open Email** opens your default mail app without embedding the form
contents in the email URL.

<form id="studio-feedback-form" class="studio-feedback" novalidate>
  <section class="feedback-section" aria-labelledby="environment-heading">
    <h2 id="environment-heading">Environment</h2>
    <div class="feedback-grid">
      <div class="feedback-field"><label for="feedback-name">Name or initials <span class="optional">Optional</span></label><input id="feedback-name" name="name" type="text" autocomplete="name"></div>
      <div class="feedback-field"><label for="feedback-date">Date</label><input id="feedback-date" name="date" type="date"></div>
      <div class="feedback-field"><label for="feedback-version">Lyreline Studio version/build</label><input id="feedback-version" name="version" type="text" value="1.0 / Build 2"></div>
      <div class="feedback-field"><label for="feedback-macos">macOS version</label><input id="feedback-macos" name="macOS" type="text"></div>
    </div>
  </section>

  <section class="feedback-section" aria-labelledby="request-heading">
    <h2 id="request-heading">Question or issue</h2>
    <div class="feedback-field"><label for="feedback-area">Area</label><select id="feedback-area" name="area"><option value="">Choose…</option><option>Project management</option><option>Lyreline handoff</option><option>Narration</option><option>HTML publishing</option><option>PDF publishing</option><option>Video publishing</option><option>Source recording</option><option>Import or export</option><option>Other</option></select></div>
    <div class="feedback-field"><label for="feedback-goal">What were you trying to do?</label><textarea id="feedback-goal" name="goal" rows="3"></textarea></div>
    <div class="feedback-field"><label for="feedback-steps">What steps did you take?</label><textarea id="feedback-steps" name="steps" rows="4"></textarea></div>
    <div class="feedback-field"><label for="feedback-expected">What did you expect?</label><textarea id="feedback-expected" name="expected" rows="3"></textarea></div>
    <div class="feedback-field"><label for="feedback-actual">What happened?</label><textarea id="feedback-actual" name="actual" rows="3"></textarea></div>
    <div class="feedback-field"><label for="feedback-error">Exact error message <span class="optional">If any</span></label><textarea id="feedback-error" name="error" rows="2"></textarea></div>
  </section>

  <section class="feedback-section" aria-labelledby="comments-heading">
    <h2 id="comments-heading">Comments or feature request <span class="optional">Optional</span></h2>
    <div class="feedback-field"><label for="feedback-comments">What would improve Lyreline Studio for you?</label><textarea id="feedback-comments" name="comments" rows="4"></textarea></div>
  </section>

  <aside class="privacy-reminder" aria-labelledby="privacy-heading">
    <h2 id="privacy-heading">Protect sensitive information</h2>
    <p>Do not include passwords, API keys, confidential business data, personal information, private file paths, or sensitive screenshots. Attach files separately only when they are safe to share.</p>
  </aside>

  <div class="feedback-actions">
    <button id="copy-feedback" type="button">Copy Feedback</button>
    <a class="feedback-email-button" href="mailto:lyreline.support@icloud.com?subject=Lyreline%20Studio%201.0%20Feedback">Open Email</a>
  </div>
  <p id="feedback-copy-status" class="copy-status" role="status" aria-live="polite"></p>
</form>

## Send your report

1. Complete the fields that apply.
2. Select **Copy Feedback**.
3. Select **Open Email**.
4. Paste the copied report into the message.
5. Attach a screenshot only when it is safe to share.

If copying is unavailable, manually include the version/build, macOS version,
steps, expected result, actual result, and exact error wording in an email to
`lyreline.support@icloud.com`.
