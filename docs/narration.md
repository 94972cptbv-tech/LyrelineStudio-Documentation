# Narration

Each narrated section keeps its Lyreline source content separate from its Studio
narration draft. You can adapt the draft for spoken delivery without changing
the canonical procedure in Lyreline.

## Narration choices

### Imported audio

Attach an existing WAV, AIFF, or M4A narration file. Studio copies managed audio
into the project, reads its duration, and updates visual timing.

### Apple Speech

Apple Speech uses the speech voices available through macOS. Choose a voice and
adjust the supported speaking settings before generating narration. Voice
availability can vary by Mac and installed system voices.

### OpenAI Speech

OpenAI Speech is optional. You provide your own OpenAI API key in Lyreline Studio
Settings. The key is stored in macOS Keychain rather than in project files or
preferences.

When OpenAI Speech is selected, the narration text required to generate speech
is sent to OpenAI using the API key you provide. Narration text is sent when you
initiate generation. Testing the OpenAI connection also contacts OpenAI using
that key. No OpenAI request occurs merely because Lyreline Studio is launched.

If a key is missing, open Lyreline Studio Settings, add and save the key, and
optionally test the connection. OpenAI account access, usage, availability, and
data handling are governed by OpenAI's terms and policies.

## Source updates and narration review

When Lyreline source changes, Studio does not silently replace an established
narration draft or generated audio. The Lyreline source and Studio narration
remain separate until you explicitly decide how to reconcile them.

For sections that need narration review, choose **Review Narration Update…** to
compare the last reviewed Lyreline source, the updated Lyreline source, and the
current Studio narration. Studio also provides an editable **Proposed
Narration**.

You can use **Start from Current Narration** when the existing spoken wording is
mostly correct, or **Reset to Updated Source** when the new Lyreline wording is
the better starting point. You can then edit the proposal before applying it.
For example, you can preserve polished narration, incorporate only the meaningful
source changes, correct a typo, or blend old and new wording.

### Apply Narration Update

**Apply Narration Update** changes only the Studio narration text. It does not:

- regenerate narration audio;
- replace the existing generated audio;
- change the Lyreline source; or
- mark the source update reviewed.

If generated narration already exists, changing its draft can cause Studio to
show **Needs Regeneration**. Regeneration remains a separate action so you can
finish reviewing and editing the narration before replacing the audio.

Studio supports Undo and Redo for an applied narration reconciliation, allowing
you to return to the previous Studio narration while the source review remains
unresolved.

### Mark Reviewed

**Mark Reviewed** means that you have reviewed the updated Lyreline source and
are satisfied with the section's Studio narration. It does **not** modify the
narration text or regenerate audio.

After required section reviews are complete, the project-level **Mark Updates
Reviewed** action can be used to acknowledge the overall continuation update.

For imported audio, changing narration text cannot regenerate the attached
recording. Studio therefore does not offer the editable reconciliation proposal
for imported-audio narration. If the spoken content also needs to change,
update or replace the imported recording separately.
