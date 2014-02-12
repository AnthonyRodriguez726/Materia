<?php
/**
 * Materia
 * It's a thing
 *
 * @package	    Materia
 * @version    1.0
 * @author     UCF New Media
 * @copyright  2011 New Media
 * @link       http://kogneato.com
 */


/**
 * The go between for the user and the Materia Package.
 *
 * The widget managers for the Materia package.
 *
 * @package	    Main
 * @author      Kevin Baugh
 */

namespace Materia;

class Widget
{
	public $clean_name          = '';
	public $creator             = '';
	public $created_at          = 0;
	public $dir                 = '';
	public $flash_version       = 0;
	public $api_version         = 0;
	public $group               = '';
	public $height              = 0;
	public $id                  = 0;
	public $is_answer_encrypted = true;
	public $in_catalog	        = true;
	public $is_editable         = true;
	public $is_playable         = true;
	public $is_qset_encrypted   = true;
	public $is_scalable         = 0;
	public $is_scorable         = true;
	public $is_storage_enabled  = false;
	public $package_hash        = '';
	public $meta_data           = null;
	public $name                = '';
	public $player              = '';
	public $question_types      = '';
	public $score_module        = 'base';
	public $width               = 0;

	public function __construct($properties=[])
	{
		if ( ! empty($properties))
		{
			foreach ($properties as $key => $val)
			{
				if (property_exists($this, $key)) $this->{$key} = $val;
			}
			// if a clean name wasn't created already, make one based on the name
			if ( ! empty($properties['name']) && empty($this->clean_name)) $this->clean_name = \Inflector::friendly_title($this->name, '-', true);
			$this->dir = "{$this->id}-{$this->clean_name}/";
			if ($this->api_version == 0) $this->api_version = \Config::get('materia.default_api_version');
		}
	}

	/**
	 *  Load a widget definition from the database based on name or widget_id
	 * @param mixed widget_id or clean name
	 */
	public function get($id_or_clean_name)
	{
		// ------------------------- GET THE WIDGET -------------------
		$q = \DB::select()->from('widget');

		if (\RocketDuck\Util_Validator::is_pos_int($id_or_clean_name))
		{
			$q->where('id', $id_or_clean_name); // search by id
		}
		else
		{
			$q->where('clean_name', $id_or_clean_name); // search by clean name
		}
		$w_results = $q->execute();

		if ($w_results->count() != 1) return false;

		$w = $w_results[0];

		// -------------- BUILD _metadata ---------------
		$meta_results = \DB::select()
			->from('widget_metadata')
			->where('widget_id', $w['id'])
			->execute();

		$meta_data = [];
		$meta_data['features'] = [];
		$meta_data['supported_data'] = [];
		foreach ($meta_results as $r)
		{
			// Features
			if ($r['name'] == 'features' && ! in_array($r['value'], $meta_data['features']))
			{
				$meta_data['features'][] = $r['value'];
			}
			// Supported Data
			elseif ($r['name'] == 'supported_data' && ! in_array($r['value'], $meta_data['supported_data']))
			{
				$meta_data['supported_data'][] = $r['value'];
			}
			// Anything Else
			else
			{
				$meta_data[$r['name']] = $r['value'];
			}
		}

		// -------------- INIT OBJECT ---------------
		$this->__construct([
			'clean_name'          => $w['clean_name'],
			'created_at'          => $w['created_at'],
			'creator'             => $w['creator'],
			'is_answer_encrypted' => $w['is_answer_encrypted'],
			'is_qset_encrypted'   => $w['is_qset_encrypted'],
			'flash_version'       => $w['flash_version'],
			'api_version'         => $w['api_version'],
			'group'               => $w['group'],
			'height'              => $w['height'],
			'id'                  => $w['id'],
			'in_catalog'          => $w['in_catalog'],
			'is_editable'         => $w['is_editable'],
			'name'                => $w['name'],
			'is_playable'         => $w['is_playable'],
			'player'              => $w['player'],
			'is_scorable'         => $w['is_scorable'],
			'is_scalable'         => $w['is_scalable'],
			'score_module'        => $w['score_module'],
			'is_storage_enabled'  => $w['is_storage_enabled'],
			'package_hash'        => $w['package_hash'],
			'width'               => $w['width'],
			'meta_data'           => $meta_data,
		]);
		return true;
	}
}